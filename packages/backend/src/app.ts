import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";
import formbody from "@fastify/formbody";
import fastifyJwt, { JWT } from "@fastify/jwt";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import {
  EXPIRES_IN,
  INVALID_LOGIN,
  LOGIN_SUCCESS,
  NOT_AUTHORIZED,
} from "./constants/messages.js";
import { loginRespSchema, loginSchema } from "./schemas/loginSchema.js";
import { errorSchema } from "./schemas/errorSchema.js";
import { loginValid } from "./services/userService.js";
import { healthCheck } from "./routes/healthCheck.js";
import { userListRoute } from "./routes/userListRoute.js";
import { userRoute } from "./routes/userRoute.js";
import dotenv from 'dotenv';

declare module "fastify" {
  interface FastifyRequest {
    jwt: JWT;
  }
  export interface FastifyInstance {
    authenticate: any;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: UserPayload;
  }
}

type UserPayload = {
  user_id: number;
  is_admin: boolean;
};

dotenv.config();

const apiKey = process.env.SERVER_JWT_SECRET;

export function build(opts?: FastifyServerOptions): FastifyInstance {
  const server = fastify({
    logger: true,
    ...opts,
  }).withTypeProvider<JsonSchemaToTsProvider>();

  const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (error) {
      return reply.status(401).send({ message: NOT_AUTHORIZED });
    }
  };

  server.register(formbody);
  server.register(fastifyJwt, {
    secret: apiKey ?? '',
  });

  server.addHook("onRequest", async (request, reply) => {
    if (request.url.startsWith("/api")) {
      await authenticate(request, reply);
    }
  });

  // Login to create a token cannot be moved into a separate file due to the JWT Signing
  server.route({
    method: "POST",
    url: "/login",
    schema: {
      body: loginSchema,
      response: {
        200: loginRespSchema,
        403: errorSchema,
      },
    },
    handler: async (request, reply) => {
      const { username, password } = request.body;
      const user = await loginValid(username, password);

      if (user) {
        const token = server.jwt.sign(
          { user_id: user.user_id, is_admin: user.is_admin },
          { expiresIn: EXPIRES_IN },
        );
        return {
          message: LOGIN_SUCCESS,
          token: token,
          user_id: user.user_id,
          is_admin: user.is_admin,
        };
      }

      reply.code(403).send({ message: INVALID_LOGIN });
    },
  });

  // Refresh Token cannot be moved into a separate file due to the JWT Signing
  server.route({
    method: "POST",
    url: "/refresh",
    schema: {
      response: {
        200: { token: { type: "string" } },
        401: errorSchema,
      },
    },
    preHandler: async (request, reply) => {
      await authenticate(request, reply);
    },
    handler: async (request) => {
      const user = request.user;
      const token = server.jwt.sign(
        { user_id: user.user_id, is_admin: user.is_admin },
        { expiresIn: EXPIRES_IN },
      );
      return {
        token: token,
      };
    },
  });

  // all other routes
  server.route(healthCheck);
  server.route(userListRoute);
  server.route(userRoute);

  return server;
}

export default build;
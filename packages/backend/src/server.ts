import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import formbody from "@fastify/formbody";
import fastifyJwt, { FastifyJWT, JWT } from "@fastify/jwt";

import { healthCheck } from "./routes/healthCheck.js";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { loginRespSchema, loginSchema } from "./schemas/loginSchema.js";
import { errorSchema } from "./schemas/errorSchema.js";
import { loginValid } from "./services/userService.js";
import { NOT_AUTHORIZED } from "./constants/messages.js";
import { userListRoute } from "./routes/userListRoute.js";
import { userRoute } from "./routes/userRoute.js";

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

const fastify = Fastify({
  logger: true,
}).withTypeProvider<JsonSchemaToTsProvider>();


const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  const auth = request.headers.authorization;
  const token = auth?.replace('Bearer ', '');

  if (!token) {
    return reply.status(401).send({ message: NOT_AUTHORIZED });
  }

  try {
    const verify = await request.jwtVerify();
    console.log('Token Verify:', verify.toString());
  } catch(error) {
    return reply.status(401).send({ message: NOT_AUTHORIZED });
  }
};

fastify.register(formbody);
fastify.register(fastifyJwt, {
  secret: "VXY3IqcQAP7GK6aNK0ED8NVFuPfpPR7CGEJOirSlFOrNKQDgvNqQA5c1uMeOt14a",
});

fastify.addHook("onRequest", async (request, reply) => {
  if (request.url.startsWith("/api")) {
    await authenticate(request, reply);
  }
});

// Login to crate a token
fastify.route({
  method: "POST",
  url: "/login",
  schema: {
    body: loginSchema,
    response: {
      201: loginRespSchema,
      403: errorSchema,
    },
  },
  handler: async (request, reply) => {
    const { username, password } = request.body;
    const user = await loginValid(username, password);

    if (user) {
      const token = fastify.jwt.sign(
        { user_id: user.user_id, is_admin: user.is_admin },
        { expiresIn: "15m" },
      );
      return {
        message: "Login Successful",
        token: token,
        user_id: user.user_id,
        is_admin: user.is_admin
      };
    }

    reply.code(403).send({ message: "invalid username or password" });
  },
});

// all other routes
fastify.route(healthCheck);
fastify.route(userListRoute);
fastify.route(userRoute);

// Server startup
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

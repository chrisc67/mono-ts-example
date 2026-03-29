import Fastify from "fastify";
import formbody from "@fastify/formbody";
import fastifyJwt from "@fastify/jwt";

import { healthCheck } from "./routes/healthCheck.js";
import { users } from "./constants/users.js";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { loginRespSchema, loginSchema } from "./schemas/loginSchema.js";
import { errorSchema } from "./schemas/errorSchema.js";

const fastify = Fastify({
  logger: true,
}).withTypeProvider<JsonSchemaToTsProvider>();

fastify.register(formbody);
fastify.register(fastifyJwt, {
  secret: "VXY3IqcQAP7GK6aNK0ED8NVFuPfpPR7CGEJOirSlFOrNKQDgvNqQA5c1uMeOt14a",
});

fastify.route(healthCheck);
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
    const foundUser = users.find((usr) => usr.username === username);

    if (foundUser && foundUser.password === password) {
      const token = fastify.jwt.sign(
        { user_id: foundUser.user_id },
        { expiresIn: "1h" },
      );
      return {
        message: "Login Successful",
        token: token,
        user_id: foundUser.user_id,
      };
    }

    reply.code(403).send({ message: "invalid username or password" });
  },
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

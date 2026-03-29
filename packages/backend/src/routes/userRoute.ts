import { getUserById } from "../services/userService.js";
import { userSchema } from "../schemas/userSchema.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { errorSchema } from "../schemas/errorSchema.js";
import { BAD_REQUEST, NOT_AUTHORIZED, NOT_FOUND } from "../constants/messages.js";

export const userRoute = {
  method: "GET",
  url: "/api/users/:id",
  schema: {
    response: {
      200: userSchema,
      400: errorSchema,
      401: errorSchema,
      404: errorSchema,
    },
  },
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = <{ id: string }>request.params;
    try {
      const userId = parseInt(id);
      let foundUser;
      if (request.user.is_admin) {
        foundUser = await getUserById(userId);
      } else if (userId === request.user.user_id) {
        foundUser = await getUserById(userId);
      } else {
        reply.code(401).send({ message: NOT_AUTHORIZED });  
      }
      
      if (!foundUser) {
        reply.code(404).send({ message: NOT_FOUND });  
      }

      reply.code(200).send(foundUser);
    } catch (err) {
      reply.code(400).send({ message: BAD_REQUEST });
    }
  },
};

import { getUserById, UserResponse } from "../services/userService.js";
import { userSchema } from "../schemas/userSchema.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { errorSchema } from "../schemas/errorSchema.js";
import {
  BAD_REQUEST,
  NOT_AUTHORIZED,
  NOT_FOUND,
} from "../constants/messages.js";
import { User } from "../database/user/userTable.js";

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
      if (request.user.is_admin) {
        const foundUser: User | null = await getUserById(userId);
        if (!foundUser) {
          reply.code(404).send({ message: NOT_FOUND });
        } else {
          const resp: UserResponse = {
            ...foundUser,
            is_admin: foundUser.role === "admin",
          };
          reply.code(200).send(resp);
        }
      } else if (userId === request.user.id) {
        const foundUser: User | null = await getUserById(userId);
        if (!foundUser) {
          reply.code(404).send({ message: NOT_FOUND });
        } else {
          const resp: UserResponse = {
            ...foundUser,
            is_admin: foundUser.role === "admin",
          };
          reply.code(200).send(resp);
        }
      } else {
        reply.code(401).send({ message: NOT_AUTHORIZED });
      }
    } catch (err) {
      console.log(err);
      reply.code(400).send({ message: BAD_REQUEST });
    }
  },
};

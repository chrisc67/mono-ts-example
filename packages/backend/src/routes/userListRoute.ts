import { getAllUsers, getUserById, User } from "../services/userService.js";
import { userListSchema } from "../schemas/userSchema.js";
import { FastifyRequest } from "fastify";

export const userListRoute = {
  method: "GET",
  url: "/api/users",
  schema: {
    response: {
      200: userListSchema,
    },
  },
  handler: async (request: FastifyRequest) => {
    const is_admin = request.user.is_admin;
    let users: User[] = [];
    if (is_admin) {
      users = await getAllUsers();  
    } else {
      const user = await getUserById(request.user.user_id);
      if (user) {
        users = [user];
      }
    }
    return { users: users };
  },
};

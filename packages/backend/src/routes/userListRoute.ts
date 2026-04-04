import { getAllUsers, UserResponse } from "../services/userService.js";
import { userListSchema } from "../schemas/userSchema.js";
import { FastifyRequest } from "fastify";
import { User } from "../database/user/userTable.js";


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
    const dbUsers: User[] = await getAllUsers();
    const users: UserResponse[] = dbUsers.map((usr) => {
      const userResp: UserResponse = {
        id: usr.id,
        user_name: usr.user_name,
        first_name: usr.first_name,
        last_name: usr.last_name,
        email: usr.email,
        created_at: usr.created_at,
        is_admin: usr.role === 'admin'
      };
      return userResp;
      })
    if (is_admin) {
      return {users: users}
    } else {
      return {users: users.filter((usr) => usr.id === request.user.id)}
    }
  },
};

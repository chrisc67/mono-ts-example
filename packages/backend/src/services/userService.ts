import { dbAllUsers, dbGetUserById, dbGetUserByName } from "../database/user/userRepository.js";
import { User } from "../database/user/userTable.js";

const ADMIN = "admin";

export type UserResponse = {
  id: number,
  user_name: string,
  first_name: string,
  last_name: string,
  email: string,
  created_at: Date,
  is_admin: boolean
}


export const getAllUsers = async () => {
  const userList: User[] = await dbAllUsers();

  return userList;
};

export const getUserById = async (userId: number) => {
  if (userId) {
    const dbUser: User | undefined = await dbGetUserById(userId);
    if (dbUser === undefined) {
      return null;
    }
    return dbUser;
  }
  return null;
};

export const getUserByName = async (username: string) => {
  if (username) {
    const dbUser: User | undefined = await dbGetUserByName(username);
    if (dbUser === undefined) {
      return null;
    }
    return dbUser;
  }
  return null;

};

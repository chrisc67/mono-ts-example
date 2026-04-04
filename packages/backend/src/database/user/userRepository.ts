import { db } from "../database.js";
import { User } from "./userTable.js";

export const dbAllUsers = async () => {
  const allUsers = await db.selectFrom("user").selectAll().execute();

  return allUsers;
};

export const dbGetUserById = async (id: number) => {
  const user: User | undefined = await db
    .selectFrom("user as u")
    .selectAll()
    .where("u.id", "=", id)
    .executeTakeFirst();
  return user;
};

export const dbGetUserByName = async (username: string) => {
  const user: User | undefined = await db
    .selectFrom("user as u")
    .selectAll()
    .where("u.user_name", "=", username)
    .executeTakeFirst();
  return user;
};

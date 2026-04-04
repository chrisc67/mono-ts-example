import { GeneratedAlways, Insertable, Selectable, Updateable } from "kysely";

export default interface UserTable {
  id: GeneratedAlways<number>;
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  created_at: GeneratedAlways<Date>;
  modified_at?: Date;
  role?: "user" | "admin";
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

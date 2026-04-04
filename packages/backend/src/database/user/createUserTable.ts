import { sql } from "kysely";
import { db } from "../database.js";
import { NewUser } from "./userTable.js";

const adminUsr: NewUser = {
  user_name: "admin",
  first_name: "John",
  last_name: "Doe",
  role: "admin",
  email: "jdoe@host.com",
  password_hash: "$2a$10$lNIkKNrjIvtbcmqGSCtC/u.dj2ph1o0FahDH5Bg3hJIvTuyDD1hAm",
};

const testUsr: NewUser = {
  user_name: "testuser",
  first_name: "John",
  last_name: "Doe",
  email: "jdoe@host.com",
  password_hash: "$2a$10$sP5uGehDOnlsjdemgKKTTufUXzPFMLNqWlLJIIbyK.wtApeBUUSQS",
};

const createUserTable = async () => {
  await db.schema
    .createTable("user")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("user_name", "text", (col) => col.notNull().unique())
    .addColumn("first_name", "text", (col) => col.notNull())
    .addColumn("last_name", "text", (col) => col.notNull())
    .addColumn("email", "text", (col) => col.notNull())
    .addColumn("password_hash", "text", (col) => col.notNull())
    .addColumn("role", "text", (col) => col.defaultTo("user"))
    .addColumn("created_at", "text", (col) =>
      col.defaultTo(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc'))`),
    )
    .addColumn("modified_at", "text", (col) =>
      col.defaultTo(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc'))`),
    )
    .addCheckConstraint("user_role_check", sql`role = 'admin' or role = 'user'`)
    .execute();

  db.insertInto("user")
    .values(adminUsr)
    .onConflict((oc) => oc.doNothing())
    .execute();
  db.insertInto("user")
    .values(testUsr)
    .onConflict((oc) => oc.doNothing())
    .execute();
};

export default createUserTable;

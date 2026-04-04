import { sql } from "kysely";
import { db } from "../database.js";

const createOrderTable = async () => {
  await db.schema
    .createTable("order")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("product_id", "integer", (col) => col.notNull())
    .addColumn("user_id", "integer", (col) => col.notNull())
    .addColumn("quantity", "integer", (col) => col.notNull())
    .addColumn("order_date", "text", (col) =>
      col.defaultTo(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc'))`),
    )
    .addForeignKeyConstraint("order_user_fk", ["user_id"], "user", ["id"])
    .addForeignKeyConstraint("order_product_fk", ["product_id"], "product", [
      "id",
    ])
    .execute();
};

export default createOrderTable;

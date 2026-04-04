import { db } from "../database.js";

const createProductTable = async () => {
  await db.schema
    .createTable("product")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("name", "text", (col) => col.notNull().unique())
    .addColumn("description", "text", (col) => col.notNull())
    .addColumn("category", "text", (col) => col.notNull())
    .addColumn("price", "real", (col) => col.notNull())
    .addForeignKeyConstraint("product_category_fk", ["category"], "category", [
      "category",
    ])
    .execute();
};

export default createProductTable;

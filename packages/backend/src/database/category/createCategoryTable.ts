import { db } from "../database.js";

const createCategoryTable = async () => {
  await db.schema
    .createTable("category")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("category", "text", (col) => col.notNull().unique())
    .execute();
};

export default createCategoryTable;
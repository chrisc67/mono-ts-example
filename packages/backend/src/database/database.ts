import SQLite from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import UserTable from "./user/userTable";
import ProductTable from "./product/productTable";
import OrderTable from "./order/orderTable";
import CategoryTable from "./category/categoryTable";

export interface Database {
  user: UserTable;
  product: ProductTable;
  order: OrderTable;
  category: CategoryTable;
}

const dialect = new SqliteDialect({
  database: new SQLite("data.db"),
});

// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});

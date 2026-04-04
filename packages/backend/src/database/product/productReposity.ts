import { db } from "../database.js";

export const getAllProducts = async () => {
  const allProducts = await db.selectFrom("product").selectAll().execute();

  return allProducts;
};

export const getProductById = async (id: number) => {
  const product = await db
    .selectFrom("product")
    .where("id", "=", id)
    .executeTakeFirst();
  return product;
};

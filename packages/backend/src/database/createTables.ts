import createUserTable from "./user/createUserTable.js";
import createProductTable from "./product/createProductTable.js";
import createCategoryTable from "./category/createCategoryTable.js";
import createOrderTable  from "./order/createOrderTable.js";

export const createTables = async () => {
  await createUserTable();
  await createCategoryTable();
  await createProductTable();
  await createOrderTable();
};

export default createTables;
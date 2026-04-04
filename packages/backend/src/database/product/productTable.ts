import { GeneratedAlways, Insertable, Selectable, Updateable } from "kysely";

export default interface ProductTable {
  id: GeneratedAlways<number>;
  name: string;
  description: string;
  category: string;
  price: number;
  created_at: GeneratedAlways<Date>;
  modified_at: GeneratedAlways<Date>;
}

export type Product = Selectable<ProductTable>;
export type NewProduct = Insertable<ProductTable>;
export type ProductUpdate = Updateable<ProductTable>;

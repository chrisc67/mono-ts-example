import { GeneratedAlways, Insertable, Selectable, Updateable } from "kysely";

export default interface CategoryTable {
  id: GeneratedAlways<number>
  category: string
}

export type Category = Selectable<CategoryTable>
export type NewCategory = Insertable<CategoryTable>
export type CategoryUpdate = Updateable<CategoryTable>

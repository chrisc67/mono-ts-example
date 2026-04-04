import { GeneratedAlways, Insertable, Selectable, Updateable } from 'kysely'


export default interface OrderTable {
  id: GeneratedAlways<number>
  product_id: number
  user_id: number
  quantity: number
  order_date: GeneratedAlways<Date>
}

export type Order = Selectable<OrderTable>
export type NewOrder = Insertable<OrderTable>
export type OrderUpdate = Updateable<OrderTable>

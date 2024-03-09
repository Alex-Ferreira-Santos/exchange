export class CreateOrderDto {
  amount: number
  price_per_unit: number
  type: 'BUY' | 'SELL'
  item_id: string
  item_type: 'STOCKS' | 'REITS' | 'ETFS'
  client_id: string
}

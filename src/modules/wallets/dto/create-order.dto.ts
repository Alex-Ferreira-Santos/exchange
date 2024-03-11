import { IsEnum, IsInt, IsString, IsUUID } from 'class-validator'


enum OrderType {
  BUY = 'BUY',
  SELL = 'SELL'
}

enum OrderItemType {
  STOCKS = 'STOCKS',
  REITS = 'REITS',
  ETFS = 'ETFS'
}

export class CreateOrderDto {
  @IsInt()
  amount: number

  @IsInt()
  price_per_unit: number

  @IsEnum(OrderType)
  type: OrderType

  @IsString()
  @IsUUID()
  item_id: string

  @IsEnum(OrderItemType)
  item_type: OrderItemType

  @IsString()
  @IsUUID()
  wallet_id: string
}

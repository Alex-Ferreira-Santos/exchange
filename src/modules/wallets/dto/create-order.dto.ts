import { IsEnum, IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator'

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
  @IsNotEmpty()
  amount: number

  @IsInt()
  @IsNotEmpty()
  price_per_unit: number

  @IsEnum(OrderType)
  @IsNotEmpty()
  type: OrderType

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  item_id: string

  @IsEnum(OrderItemType)
  @IsNotEmpty()
  item_type: OrderItemType

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  wallet_id: string
}

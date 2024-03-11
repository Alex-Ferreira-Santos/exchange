import { IsInt, IsString, IsUUID } from 'class-validator'

export class CreateStockPriceDto {
  @IsString()
  @IsUUID()
  stock_id: string

  @IsInt()
  new_price: number
}

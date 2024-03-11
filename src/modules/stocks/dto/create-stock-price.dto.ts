import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreateStockPriceDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  stock_id: string

  @IsInt()
  @IsNotEmpty()
  new_price: number
}

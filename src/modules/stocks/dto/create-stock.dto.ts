import { IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateStockDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsInt()
  @IsNotEmpty()
  current_price: number
}

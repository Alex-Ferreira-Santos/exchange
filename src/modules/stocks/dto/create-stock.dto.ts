import { IsInt, IsString } from 'class-validator'


export class CreateStockDto {
  @IsString()
  name: string

  @IsInt()
  current_price: number
}

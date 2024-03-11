import { IsInt, IsNotEmpty } from 'class-validator'

export class IncreaseBalanceDto {
  @IsInt()
  @IsNotEmpty()
  value: number
}

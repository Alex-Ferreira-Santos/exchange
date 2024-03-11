import { IsInt } from "class-validator";

export class IncreaseBalanceDto {
  @IsInt()
  value: number
}

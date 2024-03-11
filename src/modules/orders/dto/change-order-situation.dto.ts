import { OrderSitatuationEnum } from "../entities/order.entity"
import { IsEnum, IsNotEmpty } from 'class-validator'

export class ChangeOrderSituationDto {
  @IsEnum(OrderSitatuationEnum)
  @IsNotEmpty()
  newSituation: OrderSitatuationEnum
}

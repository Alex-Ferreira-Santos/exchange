import { OrderSitatuationEnum } from "../entities/order.entity"
import { IsEnum } from 'class-validator'

export class ChangeOrderSituationDto {
  @IsEnum(OrderSitatuationEnum)
  newSituation: OrderSitatuationEnum
}

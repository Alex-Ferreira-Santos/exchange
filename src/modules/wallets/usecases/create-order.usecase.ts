import { Injectable } from '@nestjs/common'
import { EntityValidationError } from 'src/domain/errors/entityValidation.error'
import { OrderRepository } from '../../orders/repositories/order.repository'
import { Order, OrderSitatuationEnum } from '../../orders/entities/order.entity'
import { CreateOrderDto } from '../dto/create-order.dto'

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(dto: CreateOrderDto) {
    const order = new Order({
      amount: dto.amount,
      client_id: dto.client_id,
      item_id: dto.item_id,
      item_type: dto.item_type,
      price_per_unit: dto.price_per_unit,
      situation: OrderSitatuationEnum.OPEN,
      type: dto.type
    })

    if (order.hasErrors()) {
      throw new EntityValidationError({
        errors: order.errors
      })
    }

    return this.orderRepository.createOrder(order)
  }
}

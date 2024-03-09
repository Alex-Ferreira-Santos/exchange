import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../repositories/order.repository'
import { Order } from '../entities/order.entity'
import { ChangeOrderSituationDto } from '../dto/change-order-situation.dto'

@Injectable()
export class ChangeOrderSituationUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(order_id: string, dto: ChangeOrderSituationDto) {
    const foundOrder = await this.orderRepository.getOrderById(order_id)

    const order = new Order(foundOrder)

    order.changeSituation(dto.newSituation)

    return this.orderRepository.updateOrderSituation(order)
  }
}

import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../repositories/order.repository'

@Injectable()
export class GetOrderByIdUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(order_id: string) {
    return this.orderRepository.getOrderById(order_id)
  }
}

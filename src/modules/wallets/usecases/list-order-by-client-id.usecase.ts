import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../../orders/repositories/order.repository'

@Injectable()
export class ListOrderByClientIdUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(client_id: string) {
    return this.orderRepository.listOrdersByClientId(client_id)
  }
}

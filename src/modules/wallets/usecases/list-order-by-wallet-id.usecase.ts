import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../../orders/repositories/order.repository'

@Injectable()
export class ListOrderByWalletIdUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(wallet_id: string) {
    return this.orderRepository.listOrdersByWalletId(wallet_id)
  }
}

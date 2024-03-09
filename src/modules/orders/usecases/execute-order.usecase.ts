import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../repositories/order.repository'
import { Order } from '../entities/order.entity'
import { WalletRepository } from 'src/modules/wallets/repositories/wallet.repository'
import { InsufficientFundsError } from 'src/domain/errors/InsufficientFunds.error'
import { Wallet } from 'src/modules/wallets/entities/wallet.entity'

@Injectable()
export class ExecuteOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly walletRepository: WalletRepository
  ) {}

  async execute(order_id: string) {
    const foundOrder = await this.orderRepository.getOrderById(order_id)

    const order = new Order(foundOrder)

    const foundWallet = await this.walletRepository.getWalletById(
      order.wallet_id
    )

    const totalOrderValue = order.price_per_unit * order.amount
    if (foundWallet.balance < totalOrderValue) {
      order.changeSituation('REFUSED')
      await this.orderRepository.updateOrderSituation(order)
      throw new InsufficientFundsError()
    }

    order.changeSituation('EXECUTED')

    const wallet = new Wallet({
      ...foundWallet,
      balance: foundWallet.balance - totalOrderValue
    })

    await Promise.all([
      this.walletRepository.updateWallet(wallet),
      this.orderRepository.updateOrderSituation(order)
    ])
  }
}

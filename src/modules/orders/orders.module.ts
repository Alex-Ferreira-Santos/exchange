import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller'
import { ChangeOrderSituationUseCase } from './usecases/change-order-situation.usecase'
import { ExecuteOrderUseCase } from './usecases/execute-order.usecase'
import { GetOrderByIdUseCase } from './usecases/get-order-by-id.usecase'
import { OrderRepository } from './repositories/order.repository'
import { WalletRepository } from '../wallets/repositories/wallet.repository'

@Module({
  controllers: [OrdersController],
  providers: [
    ChangeOrderSituationUseCase,
    ExecuteOrderUseCase,
    GetOrderByIdUseCase,
    OrderRepository,
    WalletRepository
  ]
})
export class OrdersModule {}

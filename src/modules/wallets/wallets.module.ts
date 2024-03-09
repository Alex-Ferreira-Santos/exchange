import { Module } from '@nestjs/common'
import { WalletsController } from './wallets.controller'
import { UpdateWalletUseCase } from './usecases/update-wallet.usecase'
import { CreateWalletUseCase } from './usecases/create-wallet.usecase'
import { WalletRepository } from './repositories/wallet.repository'
import { GetWalletUseCase } from './usecases/get-wallet.usecase'
import { ListOrderByWalletIdUseCase } from './usecases/list-order-by-wallet-id.usecase'
import { CreateOrderUseCase } from './usecases/create-order.usecase'
import { OrderRepository } from '../orders/repositories/order.repository'

@Module({
  controllers: [WalletsController],
  providers: [
    CreateWalletUseCase,
    UpdateWalletUseCase,
    GetWalletUseCase,
    ListOrderByWalletIdUseCase,
    CreateOrderUseCase,
    WalletRepository,
    OrderRepository
  ]
})
export class WalletsModule {}

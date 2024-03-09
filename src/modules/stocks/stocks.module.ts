import { Module } from '@nestjs/common'
import { StocksController } from './stocks.controller'
import { StockRepository } from './repositories/stock.repository'
import { CreateStockUseCase } from './usecases/create-stock.usecase'
import { ListStocksUseCase } from './usecases/list-stocks.usecase'
import { GetStockByIdUseCase } from './usecases/get-stock-by-id.usecase'
import { CreateStockPriceUseCase } from './usecases/create-stock-price.usecase'

@Module({
  controllers: [StocksController],
  providers: [
    StockRepository,
    CreateStockUseCase,
    ListStocksUseCase,
    GetStockByIdUseCase,
    CreateStockPriceUseCase
  ]
})
export class StocksModule {}

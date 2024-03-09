import { Injectable } from '@nestjs/common'
import { StockRepository } from '../repositories/stock.repository'

@Injectable()
export class ListStocksUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute() {
    return this.stockRepository.listStocks()
  }
}

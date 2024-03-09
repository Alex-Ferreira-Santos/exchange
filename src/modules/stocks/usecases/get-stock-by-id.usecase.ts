import { Injectable } from '@nestjs/common'
import { StockRepository } from '../repositories/stock.repository'

@Injectable()
export class GetStockByIdUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(stock_id: string) {
    return this.stockRepository.getStockById(stock_id)
  }
}

import { Injectable } from '@nestjs/common'
import { EntityValidationError } from 'src/domain/errors/entityValidation.error'
import { Stock } from '../entities/stock.entity'
import { StockRepository } from '../repositories/stock.repository'
import { CreateStockPriceDto } from '../dto/create-stock-price.dto'

@Injectable()
export class CreateStockPriceUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(dto: CreateStockPriceDto) {
    const stockFound = await this.stockRepository.getStockById(dto.stock_id)

    const stock = new Stock({
      ...stockFound,
      current_price: dto.new_price
    })

    if (stock.hasErrors()) {
      throw new EntityValidationError({
        errors: stock.errors
      })
    }

    return this.stockRepository.createStockPrice(stock)
  }
}

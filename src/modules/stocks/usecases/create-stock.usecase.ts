import { Injectable } from '@nestjs/common'
import { EntityValidationError } from 'src/domain/errors/entityValidation.error'
import { CreateStockDto } from '../dto/create-stock.dto'
import { Stock } from '../entities/stock.entity'
import { StockRepository } from '../repositories/stock.repository'

@Injectable()
export class CreateStockUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(dto: CreateStockDto) {
    const stock = new Stock({
      name: dto.name,
      current_price: dto.current_price
    })

    if (stock.hasErrors()) {
      throw new EntityValidationError({
        errors: stock.errors
      })
    }

    return this.stockRepository.createStock(stock)
  }
}

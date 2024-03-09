import { PrismaService } from 'src/modules/prisma/prisma.service'
import { Stock } from '../entities/stock.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class StockRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createStock(stock: Stock) {
    const createdClient = await this.prismaService.stock.create({
      data: {
        name: stock.name,
        Stock_Prices: {
          create: {
            created_at: new Date(),
            price: stock.current_price
          }
        }
      }
    })
    return createdClient
  }

  async createStockPrice(stock: Stock) {
    const createdClient = await this.prismaService.stock_Prices.create({
      data: {
        stock_id: stock.stock_id,
        created_at: new Date(),
        price: stock.current_price
      }
    })
    return createdClient
  }

  async listStocks() {
    const foundClient = await this.prismaService.stock.findMany({
      take: 10
    })
    return foundClient
  }

  async getStockById(stock_id: string) {
    const foundClient = await this.prismaService.stock.findFirstOrThrow({
      where: {
        stock_id: { equals: stock_id }
      }
    })
    return foundClient
  }
}

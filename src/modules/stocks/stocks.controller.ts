import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { CreateStockDto } from './dto/create-stock.dto'
import { CreateStockUseCase } from './usecases/create-stock.usecase'
import { CreateStockPriceUseCase } from './usecases/create-stock-price.usecase'
import { GetStockByIdUseCase } from './usecases/get-stock-by-id.usecase'
import { CreateStockPriceDto } from './dto/create-stock-price.dto'
import { ListStocksUseCase } from './usecases/list-stocks.usecase'

@Controller('stocks')
export class StocksController {
  constructor(
    private readonly createStockUseCase: CreateStockUseCase,
    private readonly createStockPriceUseCase: CreateStockPriceUseCase,
    private readonly getStockByIdUseCase: GetStockByIdUseCase,
    private readonly listStocksUseCase: ListStocksUseCase
  ) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.createStockUseCase.execute(createStockDto)
  }

  @Post()
  createPrice(@Body() createStockPriceDto: CreateStockPriceDto) {
    return this.createStockPriceUseCase.execute(createStockPriceDto)
  }

  @Get()
  findAll() {
    return this.listStocksUseCase.execute()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getStockByIdUseCase.execute(id)
  }
}

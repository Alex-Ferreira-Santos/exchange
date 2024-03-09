import { Controller, Get, Param } from '@nestjs/common'
import { GetOrderByIdUseCase } from './usecases/get-order-by-id.usecase'

@Controller('orders')
export class OrdersController {
  constructor(private readonly getOrderById: GetOrderByIdUseCase) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getOrderById.execute(id)
  }
}

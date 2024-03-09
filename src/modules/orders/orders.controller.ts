import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { GetOrderByIdUseCase } from './usecases/get-order-by-id.usecase'
import { ChangeOrderSituationUseCase } from './usecases/change-order-situation.usecase'
import { ChangeOrderSituationDto } from './dto/change-order-situation.dto'
import { ExecuteOrderUseCase } from './usecases/execute-order.usecase'

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly getOrderById: GetOrderByIdUseCase,
    private readonly changeOrderSituationUseCase: ChangeOrderSituationUseCase,
    private readonly executeOrderUseCase: ExecuteOrderUseCase
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getOrderById.execute(id)
  }

  @Patch(':id')
  changeOrderSituation(
    @Param('id') id: string,
    @Body() dto: ChangeOrderSituationDto
  ) {
    return this.changeOrderSituationUseCase.execute(id, dto)
  }

  @Patch(':id/execute')
  executeOrder(@Param('id') id: string) {
    return this.executeOrderUseCase.execute(id)
  }
}

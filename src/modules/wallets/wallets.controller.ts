import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common'
import { CreateWalletDto } from './dto/create-wallet.dto'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { CreateWalletUseCase } from './usecases/create-wallet.usecase'
import { UpdateWalletUseCase } from './usecases/update-wallet.usecase'
import { GetWalletUseCase } from './usecases/get-wallet.usecase'
import { CreateOrderDto } from './dto/create-order.dto'
import { ListOrderByClientIdUseCase } from './usecases/list-order-by-client-id.usecase'
import { CreateOrderUseCase } from './usecases/create-order.usecase'

@Controller('wallets')
export class WalletsController {
  constructor(
    private readonly createWalletUseCase: CreateWalletUseCase,
    private readonly updateWalletUseCase: UpdateWalletUseCase,
    private readonly getWalletUseCase: GetWalletUseCase,
    private readonly listOrderByClientId: ListOrderByClientIdUseCase,
    private readonly createOrderUseCase: CreateOrderUseCase
    ) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.createWalletUseCase.execute(createWalletDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getWalletUseCase.execute(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.updateWalletUseCase.execute(id, updateWalletDto)
  }

  @Post(':id/orders')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.createOrderUseCase.execute(createOrderDto)
  }

  @Get(':id/orders')
  getOrderByClientId(@Param('id') client_id: string) {
    return this.listOrderByClientId.execute(client_id)
  }
}

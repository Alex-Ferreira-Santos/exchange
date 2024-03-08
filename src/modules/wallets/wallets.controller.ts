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

@Controller('wallets')
export class WalletsController {
  constructor(
    private readonly createWalletUseCase: CreateWalletUseCase,
    private readonly updateWalletUseCase: UpdateWalletUseCase,
    private readonly getWalletUseCase: GetWalletUseCase,
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
}

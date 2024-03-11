import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { GetClientUseCase } from './usecases/get-client.usecase'
import { JwtGuard } from '../auth/guards/jwt.guard'

@UseGuards(JwtGuard)
@Controller('clients')
export class ClientsController {
  constructor(
    private readonly getClientByIdUseCase: GetClientUseCase
  ) {}

  @Get(':id')
  getById(@Param('id') client_id: string) {
    return this.getClientByIdUseCase.execute(client_id)
  }
}

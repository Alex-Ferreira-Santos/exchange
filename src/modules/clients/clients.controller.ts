import { Controller, Get, Param } from '@nestjs/common'
import { GetClientUseCase } from './usecases/get-client.usecase'

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

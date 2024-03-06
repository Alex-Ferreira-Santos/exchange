import { Controller, Post, Body, Get, Param } from '@nestjs/common'
import { CreateClientUseCase } from './usecases/create-client.usecase'
import { CreateClientDTO } from './dto/create-client.dto'
import { GetClientUseCase } from './usecases/get-client.usecase'

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly createClientsUseCase: CreateClientUseCase,
    private readonly getClientByIdUseCase: GetClientUseCase
  ) {}

  @Post()
  create(@Body() createClientDto: CreateClientDTO) {
    return this.createClientsUseCase.execute({
      email: createClientDto.email,
      identifier: createClientDto.identifier,
      name: createClientDto.name
    })
  }

  @Get(':id')
  getById(@Param('id') client_id: string) {
    return this.getClientByIdUseCase.execute(client_id)
  }
}

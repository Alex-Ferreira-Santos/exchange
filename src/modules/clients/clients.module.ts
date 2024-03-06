import { Module } from '@nestjs/common'
import { ClientsController } from './clients.controller'
import { CreateClientUseCase } from './usecases/create-client.usecase'
import { GetClientUseCase } from './usecases/get-client.usecase'
import { ClientRepository } from './repositories/client.repository'

@Module({
  controllers: [ClientsController],
  providers: [
    CreateClientUseCase,
    GetClientUseCase,
    ClientRepository
  ]
})
export class ClientsModule {}

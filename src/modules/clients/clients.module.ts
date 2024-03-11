import { Module } from '@nestjs/common'
import { ClientsController } from './clients.controller'
import { GetClientUseCase } from './usecases/get-client.usecase'
import { ClientRepository } from './repositories/client.repository'

@Module({
  controllers: [ClientsController],
  providers: [GetClientUseCase, ClientRepository]
})
export class ClientsModule {}

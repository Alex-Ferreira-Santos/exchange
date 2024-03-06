import { Injectable } from '@nestjs/common'
import { ClientRepository } from '../repositories/client.repository'

@Injectable()
export class GetClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(client_id: string) {
    return this.clientRepository.getClientById(client_id)
  }
}

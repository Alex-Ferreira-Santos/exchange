import { Injectable } from '@nestjs/common'
import { CreateClientDTO } from '../dto/create-client.dto'
import { Client } from '../entities/client.entity'
import { EntityValidationError } from 'src/domain/errors/entityValidation.error'
import { ClientRepository } from '../repositories/client.repository'

@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(dto: CreateClientDTO) {
    const client = new Client({
      name: dto.name,
      email: dto.email,
      identifier: dto.identifier
    })

    if (client.hasErrors()) {
      throw new EntityValidationError({
        errors: client.errors
      })
    }

    return this.clientRepository.createClient(client)
  }
}

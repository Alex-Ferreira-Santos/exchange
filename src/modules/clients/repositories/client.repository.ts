import { PrismaService } from 'src/modules/prisma/prisma.service'
import { Client } from '../entities/client.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createClient(client: Client) {
    const createdClient = await this.prismaService.client.create({
      data: {
        name: client.name,
        email: client.email,
        identifier: client.identifier,
        client_id: client.client_id,
        hash: client.hash,
        hash_rf: client.hash_rf
      }
    })
    const {hash, hash_rf, ...rest} = createdClient
    return rest
  }

  async getClientById(client_id: string) {
    const foundClient = await this.prismaService.client.findFirstOrThrow({
      where: {
        client_id: { equals: client_id }
      }
    })
    return foundClient
  }
}

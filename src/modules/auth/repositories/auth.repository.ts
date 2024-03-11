import { PrismaService } from 'src/modules/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { Client } from '@prisma/client'

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async updateClientRefreshToken(client: Client) {
    const createdClient = await this.prismaService.client.update({
      where: {
        client_id: client.client_id
      },
      data: {
        hash_rf: client.hash_rf
      }
    })
    const { hash, hash_rf, ...rest } = createdClient
    return rest
  }

  async removeClientRefreshToken(client_id: string) {
    await this.prismaService.client.updateMany({
      where: {
        client_id: client_id ?? '',
        hash_rf: { not: null }
      },
      data: {
        hash_rf: null
      }
    })
  }
}

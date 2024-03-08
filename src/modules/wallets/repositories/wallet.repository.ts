import { PrismaService } from 'src/modules/prisma/prisma.service'
import { Wallet } from '../entities/wallet.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class WalletRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createWallet(wallet: Wallet) {
    const createdWallet = await this.prismaService.wallet.create({
      data: {
        wallet_id: wallet.wallet_id,
        name: wallet.name,
        client_id: wallet.client_id
      }
    })
    return createdWallet
  }

  async getWalletById(wallet_id: string) {
    const foundWallet = await this.prismaService.wallet.findFirstOrThrow({
      where: {
        wallet_id: { equals: wallet_id }
      }
    })
    return foundWallet
  }

  async updateWallet(wallet: Wallet) {
    const updatedWallet = await this.prismaService.wallet.update({
      data: wallet,
      where: {
        wallet_id: wallet.wallet_id
      }
    })
    return updatedWallet
  }
}

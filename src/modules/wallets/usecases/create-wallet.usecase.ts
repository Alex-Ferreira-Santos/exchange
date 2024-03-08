import { Injectable } from '@nestjs/common'
import { Wallet } from '../entities/wallet.entity'
import { WalletRepository } from '../repositories/wallet.repository'
import { CreateWalletDto } from '../dto/create-wallet.dto'

@Injectable()
export class CreateWalletUseCase {
  constructor(private readonly walletRepository: WalletRepository) {}

  async execute(dto: CreateWalletDto) {
    const wallet = new Wallet({
      name: dto.name,
      client_id: dto.client_id
    })

    return this.walletRepository.createWallet(wallet)
  }
}

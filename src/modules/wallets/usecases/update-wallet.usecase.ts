import { Injectable } from '@nestjs/common'
import { Wallet } from '../entities/wallet.entity'
import { WalletRepository } from '../repositories/wallet.repository'
import { UpdateWalletDto } from '../dto/update-wallet.dto'

@Injectable()
export class UpdateWalletUseCase {
  constructor(private readonly walletRepository: WalletRepository) {}

  async execute(wallet_id: string, dto: UpdateWalletDto) {
    const currentWallet = await this.walletRepository.getWalletById(wallet_id)
    const wallet = new Wallet(currentWallet)
    wallet.changeName(dto.name)
    return this.walletRepository.updateWallet(wallet)
  }
}

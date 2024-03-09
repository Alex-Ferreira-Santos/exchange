import { Injectable } from '@nestjs/common'
import { IncreaseBalanceDto } from '../dto/increase-balance.dto'
import { Wallet } from '../entities/wallet.entity'
import { WalletRepository } from '../repositories/wallet.repository'

@Injectable()
export class IncreaseWalletBalanceUseCase {
  constructor(private readonly walletRepository: WalletRepository) {}

  async execute(wallet_id: string, dto: IncreaseBalanceDto) {
    const foundWallet = await this.walletRepository.getWalletById(wallet_id)

    const wallet = new Wallet(foundWallet)
    wallet.increaseBalance(dto.value)
    
    await this.walletRepository.updateWallet(wallet)
  }
}

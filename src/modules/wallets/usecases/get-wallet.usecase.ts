import { Injectable } from '@nestjs/common'
import { WalletRepository } from '../repositories/wallet.repository'

@Injectable()
export class GetWalletUseCase {
  constructor(private readonly walletRepository: WalletRepository) {}

  async execute(wallet_id: string) {
    return this.walletRepository.getWalletById(wallet_id)
  }
}

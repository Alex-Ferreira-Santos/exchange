import { BadRequestException } from "@nestjs/common"

export class InsufficientFundsError extends BadRequestException {
  constructor() {
    super(`Insufficient Funds on your wallet`)
    this.message = `Insufficient Funds on your wallet`
    this.name = 'InsufficientFundsError'
  }
}

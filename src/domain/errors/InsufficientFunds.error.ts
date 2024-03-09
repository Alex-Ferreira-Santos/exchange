export class InsufficientFundsError extends Error {
  constructor() {
    super()
    this.message = `Insufficient Funds on your wallet`
    this.name = 'InsufficientFundsError'
  }
}

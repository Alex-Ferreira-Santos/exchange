import { generateUUID } from 'src/infra/uuid'

type TWalletEntityConstructor = {
  name: string
  balance?: number
  wallet_id?: string
  client_id: string
}

export class Wallet {
  name: string
  balance: number
  wallet_id: string
  client_id: string

  constructor(props: TWalletEntityConstructor) {
    this.name = props.name
    this.balance = props.balance ?? 0
    this.client_id = props.client_id
    this.wallet_id = props.wallet_id ?? generateUUID()
  }

  changeName(newName: string) {
    this.name = newName
  }

  increaseBalance(newValue: number) {
    this.balance += newValue
  }

  decreaseBalance(newValue: number) {
    this.balance -= newValue
  }
}

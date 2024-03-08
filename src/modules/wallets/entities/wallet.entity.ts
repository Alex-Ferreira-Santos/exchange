import { generateUUID } from "src/infra/uuid"

type TWalletEntityConstructor = {
  name: string
  wallet_id?: string
  client_id: string
}

export class Wallet {
  name: string
  wallet_id: string
  client_id: string

  constructor(props: TWalletEntityConstructor) {
    this.name = props.name
    this.client_id = props.client_id
    this.wallet_id = props.wallet_id ?? generateUUID()
  }

  changeName(newName: string){
    this.name = newName
  }
}

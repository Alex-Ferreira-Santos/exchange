import { generateUUID } from 'src/infra/uuid'

export enum OrderSitatuationEnum {
  OPEN = 'OPEN',
  EXECUTED = 'EXECUTED',
  REFUSED = 'REFUSED',
  CLOSED = 'CLOSED'
}

type TOrderEntityConstructor = {
  order_id?: string
  amount: number
  price_per_unit: number
  type: 'BUY' | 'SELL'
  item_id: string
  item_type: 'STOCKS' | 'REITS' | 'ETFS'
  situation: keyof typeof OrderSitatuationEnum
  wallet_id: string
}

export class Order {
  order_id: string
  amount: number
  price_per_unit: number
  type: 'BUY' | 'SELL'
  item_id: string
  item_type: 'STOCKS' | 'REITS' | 'ETFS'
  situation: keyof typeof OrderSitatuationEnum
  wallet_id: string
  errors: string[] = []

  constructor(props: TOrderEntityConstructor) {
    this.order_id = props.order_id ?? generateUUID()
    this.amount = props.amount
    this.price_per_unit = props.price_per_unit
    this.type = props.type
    this.item_id = props.item_id
    this.item_type = props.item_type
    this.situation = props.situation
    this.wallet_id = props.wallet_id
    this.validate()
  }

  private validate() {
    if (this.amount <= 0) {
      this.errors.push('The amount must be bigger than 0')
    }

    if (this.price_per_unit <= 0) {
      this.errors.push('Cannot send an order with 0 value')
    }
  }

  hasErrors(){
    return this.errors.length > 0
  }

  changeSituation(newSituation: keyof typeof OrderSitatuationEnum){
    this.situation = newSituation
  }
}

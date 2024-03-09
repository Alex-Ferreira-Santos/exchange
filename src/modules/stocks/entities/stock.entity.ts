import { generateUUID } from 'src/infra/uuid'

type TStockEntityConstructor = {
  stock_id?: string
  name: string
  current_price: number
}

export class Stock {
  errors: string[]
  stock_id: string
  name: string
  current_price: number

  constructor(props: TStockEntityConstructor) {
    this.name = props.name
    this.current_price = props.current_price
    this.stock_id = props.stock_id ?? generateUUID()
    this.validate()
  }

  private validate() {
    if (this.current_price <= 0) {
      this.errors.push('price cannot be below or equal to 0')
    }
  }

  hasErrors() {
    return this.errors.length > 0
  }
}

import { generateUUID } from 'src/infra/uuid'

type TClientEntityConstructor = {
  client_id?: string
  name: string
  identifier: string
  email: string
  hash?: string
  hash_rf?: string
}

export class Client {
  errors: string[]
  client_id: string
  name: string
  identifier: string
  email: string
  hash: string
  hash_rf:string

  constructor(props: TClientEntityConstructor) {
    this.client_id = props.client_id ?? generateUUID()
    this.name = props.name
    this.identifier = props.identifier
    this.email = props.email
    this.hash = props.hash
    this.hash_rf = props.hash_rf
    this.errors = []
    this.validate()
  }

  private validate() {
    if (this.identifier.length < 11) {
      this.errors.push('Invalid identifier')
    }
  }

  hasErrors(){
    return this.errors.length > 0
  }

}

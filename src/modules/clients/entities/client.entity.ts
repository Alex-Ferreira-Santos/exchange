import { generateUUID } from 'src/infra/uuid'

type TClientEntityConstructor = {
  client_id?: string
  name: string
  identifier: string
  email: string
}

export class Client {
  errors: string[]
  client_id: string
  name: string
  identifier: string
  email: string

  constructor(props: TClientEntityConstructor) {
    this.client_id = props.client_id ?? generateUUID()
    this.name = props.name
    this.identifier = props.identifier
    this.email = props.email
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

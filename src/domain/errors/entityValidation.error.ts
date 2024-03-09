import { BadRequestException } from "@nestjs/common"

type TEntityValidationErrorConstructor = {
  message?: string
  errors: string[]
}

export class EntityValidationError extends BadRequestException {
  errors: string[]
  constructor(props: TEntityValidationErrorConstructor) {
    super(props.message ?? `Entity validation error`)
    this.message = props.message ?? `Entity validation error`
    this.name = 'EntityValidationError'
    this.errors = props.errors
  }
}

type TEntityValidationErrorConstructor = {
  message?: string
  errors: string[]
}

export class EntityValidationError extends Error {
  errors: string[]
  constructor(props: TEntityValidationErrorConstructor) {
    super()
    this.message = props.message ?? `Entity validation error`
    this.name = 'EntityValidationError'
    this.errors = props.errors
  }
}

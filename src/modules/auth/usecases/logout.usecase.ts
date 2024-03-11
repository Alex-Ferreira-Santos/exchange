import { Injectable } from '@nestjs/common'
import { AuthRepository } from '../repositories/auth.repository'

@Injectable()
export class LogoutUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(client_id: string) {
    return this.authRepository.removeClientRefreshToken(client_id)
  }
}

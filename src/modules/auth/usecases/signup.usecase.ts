import { Client } from 'src/modules/clients/entities/client.entity'
import { SignUpDTO } from '../dto/signup.dto'
import { EntityValidationError } from 'src/domain/errors/entityValidation.error'
import { ClientRepository } from 'src/modules/clients/repositories/client.repository'
import { JWT } from 'src/infra/jwt/crypto'
import { Injectable } from '@nestjs/common'
import { AuthRepository } from '../repositories/auth.repository'

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly authRepository: AuthRepository,
    private readonly jwt: JWT
  ) {}

  async execute(dto: SignUpDTO) {
    const hashedPassword = await this.jwt.hash(dto.password)

    let client = new Client({
      name: dto.name,
      email: dto.email,
      identifier: dto.identifier,
      hash: hashedPassword
    })

    if (client.hasErrors()) {
      throw new EntityValidationError({
        errors: client.errors
      })
    }

    const createdClient = await this.clientRepository.createClient(client)

    client = new Client(createdClient)

    const tokens = await this.generateTokens(client)

    client.hash_rf = await this.jwt.hash(tokens.refreshToken)

    await this.authRepository.updateClientRefreshToken(client)

    return tokens
  }

  private async generateTokens(client: Client) {
    const FIFTEEN_MINUTES = 60 * 15
    const ONE_WEEK = 60 * 60 * 24 * 7
    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.generateToken({
        data: {
          sub: client.client_id,
          email: client.email
        },
        secret: process.env.JWT_SECRET,
        timeToExpireInSeconds: FIFTEEN_MINUTES
      }),
      this.jwt.generateToken({
        data: {
          sub: client.client_id,
          email: client.email
        },
        secret: process.env.JWT_REFRESH_SECRET,
        timeToExpireInSeconds: ONE_WEEK
      })
    ])

    return {
      accessToken,
      refreshToken
    }
  }
}

import { ForbiddenException, Injectable } from '@nestjs/common'
import { AuthRepository } from '../repositories/auth.repository'
import { ClientRepository } from 'src/modules/clients/repositories/client.repository'
import { JWT } from 'src/infra/jwt/crypto'
import { Client } from 'src/modules/clients/entities/client.entity'

@Injectable()
export class RefreshUseCase {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly authRepository: AuthRepository,
    private readonly jwt: JWT
  ) {}

  async execute(client_id: string, refresh_token: string) {
    const clientFound = await this.clientRepository.getClientById(client_id)

    if (!clientFound) throw new ForbiddenException('Access Denied')
    await this.jwt.compare(refresh_token, clientFound.hash_rf)

    if (!clientFound) throw new ForbiddenException('Access Denied')

    const client = new Client(clientFound)

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

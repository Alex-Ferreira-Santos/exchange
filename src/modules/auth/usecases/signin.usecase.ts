import { ForbiddenException, Injectable } from '@nestjs/common'
import { SignInDTO } from '../dto/signin.dto'
import { ClientRepository } from 'src/modules/clients/repositories/client.repository'
import { JWT } from 'src/infra/jwt/crypto'
import { Client } from 'src/modules/clients/entities/client.entity'
import { AuthRepository } from '../repositories/auth.repository'

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly authRepository: AuthRepository,
    private readonly jwt: JWT
  ) {}

  async execute(dto: SignInDTO) {
    const clientFound = await this.clientRepository.getClientByEmail(dto.email)

    if (!clientFound) throw new ForbiddenException('Access Denied')

    const passwordMatches = this.jwt.compare(dto.password, clientFound.hash)

    if (!passwordMatches) throw new ForbiddenException('Access Denied')

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

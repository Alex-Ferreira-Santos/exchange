import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { SignInUseCase } from './usecases/signin.usecase'
import { SignUpUseCase } from './usecases/signup.usecase'
import { AccessTokenStrategy } from './strategies/access_token.strategy'
import { RefreshTokenStrategy } from './strategies/refresh_token.strategy'
import { JwtModule } from '@nestjs/jwt'
import { ClientRepository } from '../clients/repositories/client.repository'
import { JWT } from 'src/infra/jwt/crypto'
import { AuthRepository } from './repositories/auth.repository'
import { LogoutUseCase } from './usecases/logout.usecase'
import { RefreshUseCase } from './usecases/refresh.usecase'

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    SignInUseCase,
    SignUpUseCase,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    ClientRepository,
    AuthRepository,
    LogoutUseCase,
    RefreshUseCase,
    JWT
  ]
})
export class AuthModule {}

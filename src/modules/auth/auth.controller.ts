import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req
} from '@nestjs/common'
import { SignInDTO } from './dto/signin.dto'
import { SignInUseCase } from './usecases/signin.usecase'
import { SignUpUseCase } from './usecases/signup.usecase'
import { SignUpDTO } from './dto/signup.dto'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { LogoutUseCase } from './usecases/logout.usecase'
import { RefreshUseCase } from './usecases/refresh.usecase'
import { GetUser } from './decorators/get-user.decorator'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly signUpUseCase: SignUpUseCase,
    private readonly logoutUseCase: LogoutUseCase,
    private readonly refreshUseCase: RefreshUseCase
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  signin(@Body() signInDTO: SignInDTO) {
    return this.signInUseCase.execute(signInDTO)
  }

  @Post('/signup')
  signup(@Body() signUpDTO: SignUpDTO) {
    return this.signUpUseCase.execute(signUpDTO)
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @Post('/logout')
  logout(@GetUser('sub') client_id: string) {
    return this.logoutUseCase.execute(client_id)
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @HttpCode(HttpStatus.OK)
  @Post('/refresh')
  refresh(
    @GetUser('sub') client_id: string,
    @GetUser('refreshToken') refresh_token: string
  ) {
    return this.refreshUseCase.execute(client_id, refresh_token)
  }
}

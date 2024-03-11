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

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly signUpUseCase: SignUpUseCase,
    private readonly logoutUseCase: LogoutUseCase
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
  logout(@Req() req: Request) {
    const client_id = req.user?.['sub']

    return this.logoutUseCase.execute(client_id)
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @HttpCode(HttpStatus.OK)
  @Post('/refresh')
  refresh(@Body() signUpDTO: SignUpDTO) {
    return this.signUpUseCase.execute(signUpDTO)
  }
}

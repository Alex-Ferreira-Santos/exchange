import { Controller, Post, Body } from '@nestjs/common'
import { SignInDTO } from './dto/signin.dto'
import { SignInUseCase } from './usecases/signin.usecase'
import { SignUpUseCase } from './usecases/signup.usecase'
import { SignUpDTO } from './dto/signup.dto'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly signUpUseCase: SignUpUseCase,
    
    ) {}

  @Post()
  signin(@Body() signInDTO: SignInDTO) {
    return this.signInUseCase.execute(signInDTO)
  }

  @Post('/signup')
  signup(@Body() signUpDTO: SignUpDTO) {
    return this.signUpUseCase.execute(signUpDTO)
  }
}

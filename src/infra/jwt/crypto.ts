import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

type TGenerateTokenProps<T extends object> = {
  data: T
  secret: string
  timeToExpireInSeconds: number
}

@Injectable()
export class JWT {
  constructor(private readonly jwtService: JwtService) {}

  hash(data: string) {
    return bcrypt.hash(data, 10)
  }

  async generateToken<T extends object>(props: TGenerateTokenProps<T>) {
    const token = await this.jwtService.signAsync(props.data, {
      secret: props.secret,
      expiresIn: props.timeToExpireInSeconds
    })

    return token
  }
}

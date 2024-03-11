import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

type TJWTPayload = {
  sub: string
  email: string
}

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh'
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      passReqToCallback: true
    })
  }

  validate(req: Request, payload: TJWTPayload) {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim()
    return {
      ...payload,
      refreshToken
    }
  }
}

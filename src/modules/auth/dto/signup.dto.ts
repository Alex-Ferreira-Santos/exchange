import { IsEmail, IsString } from "class-validator"

export class SignUpDTO {
  @IsString()
  name: string

  @IsString()
  identifier: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  password: string
}

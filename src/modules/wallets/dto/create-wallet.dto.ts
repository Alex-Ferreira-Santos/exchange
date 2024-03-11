import { IsNotEmpty, IsString, IsUUID } from "class-validator"

export class CreateWalletDto {
  @IsString()
  @IsNotEmpty()

  name: string

  @IsString()
  @IsUUID()
  @IsNotEmpty()

  client_id: string
}

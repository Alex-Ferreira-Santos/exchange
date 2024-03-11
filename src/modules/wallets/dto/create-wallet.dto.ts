import { IsString, IsUUID } from "class-validator"

export class CreateWalletDto {
  @IsString()
  name: string

  @IsString()
  @IsUUID()
  client_id: string
}

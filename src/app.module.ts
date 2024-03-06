import { Module } from '@nestjs/common'
import { ClientsModule } from './modules/clients/clients.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ClientsModule,
    PrismaModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

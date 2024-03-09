import { Module } from '@nestjs/common'
import { ClientsModule } from './modules/clients/clients.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { WalletsModule } from './modules/wallets/wallets.module'
import { StocksModule } from './modules/stocks/stocks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ClientsModule,
    PrismaModule,
    WalletsModule,
    StocksModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

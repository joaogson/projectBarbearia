import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarberModule } from './barber/barber.module';
import { ServicesModule } from './services/services.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [BarberModule, ServicesModule, PrismaModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

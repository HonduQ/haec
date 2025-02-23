import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HorseModule } from './horse/horse.module';

@Module({
  imports: [HorseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

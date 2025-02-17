import { Module } from '@nestjs/common';
import { HorseController } from './controllers/horse.controller';
import { HorseService } from './services/horse.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [HorseController],
  providers: [HorseService, PrismaService],
})
export class HorseModule {}

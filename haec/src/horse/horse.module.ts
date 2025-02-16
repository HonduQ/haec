import { Module } from "@nestjs/common";
import { HorseController } from "./controllers/horse.controller";
import { HorseService } from "./services/horse.service";

@Module({
    controllers: [HorseController],
    providers: [HorseService]
  })
  export class HorseModule {}
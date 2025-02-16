import { Controller, Get } from '@nestjs/common';
import { HorseService } from '../services/horse.service';

@Controller('horses')
export class HorseController {

    constructor(private readonly horseService:HorseService){}

    @Get()
    public async findAll() {
        return this.horseService.getHorses();
  }
}
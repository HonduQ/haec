import { Controller, Get, Post, Body } from '@nestjs/common';
import { HorseService } from '../services/horse.service';

@Controller('horses')
export class HorseController {

  constructor(private readonly horseService:HorseService){}

  @Get()
  public async findAll() {
    return this.horseService.getHorses();
  }

  @Post()
  handlePost(@Body() body: any): string {
  return this.horseService.writeJSONBody(body);
}

}
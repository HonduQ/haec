import { Controller, Get, Post, Body } from '@nestjs/common';
import { HorseService } from '../services/horse.service';

@Controller('horses')
export class HorseController {
  constructor(private readonly horseService: HorseService) { }

  @Get()
  public async findAll() {
    return this.horseService.getHorses();
  }

  @Post('/create')
  async create(@Body() body: { showName: string; name: string; feed: string }) {
    return this.horseService.createHorse(body);
  }

  @Post('/delete')
  async delete(@Body() data: { id: number }) {
    const horseID = data.id;
    return await this.horseService.deleteHorse(horseID);
  }

  @Post('/softDelete')
  async softDelete(@Body() data: { id: number }) {
    const horseID = data.id;
    return await this.horseService.softDeleteHorse(horseID);
  }
}

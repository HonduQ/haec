import { Controller, Get, Post, Body } from '@nestjs/common';
import { HorseService } from '../services/horse.service';
import { UpdateHorseDto } from '../dto/update-horse.dto';

@Controller('horses')
export class HorseController {
  constructor(private readonly horseService: HorseService) { }

  @Get()
  public async findAll() {
    return this.horseService.getHorses();
  }

  @Post('/create')
  public async create(@Body() body: { showName: string; name: string; feed: string }) {
    return this.horseService.createHorse(body);
  }

  @Post('/softDelete')
  public async softDelete(@Body() data: { id: number }) {
    const horseID = data.id;
    return await this.horseService.softDeleteHorse(horseID);
  }

  @Post('/update')
  public updateHorse(@Body() id: number, updateHorseDto: UpdateHorseDto) {
    return this.horseService.updateHorse(id, updateHorseDto);
  }
}

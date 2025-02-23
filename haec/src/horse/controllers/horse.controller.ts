import { Controller, Get, Post, Body } from '@nestjs/common';
import { HorseService } from '../services/horse.service';
import { UpdateHorseDto } from '../dto/update-horse.dto';
import { CreateHorseDto } from '../dto/create-horse.dto';

@Controller('horses')
export class HorseController {
  constructor(private readonly horseService: HorseService) { }

  @Get()
  public async findAll() {
    return this.horseService.getHorses();
  }

  @Post('/create')
  public async create(@Body() createHorseDto: CreateHorseDto) {
    return this.horseService.createHorse(createHorseDto);
  }

  @Post('/update')
  public async updateHorse(@Body() body: { id: number; updateHorseDto: UpdateHorseDto }) {
    return await this.horseService.updateHorse(body.id, body.updateHorseDto);
  }

  @Post('/softDelete')
  public async softDelete(@Body() data: { id: number }) {
    const horseID = data.id;
    return await this.horseService.softDeleteHorse(horseID);
  }
}

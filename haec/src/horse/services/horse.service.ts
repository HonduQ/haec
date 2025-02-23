import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UpdateHorseDto } from '../dto/update-horse.dto';
import { CreateHorseDto } from '../dto/create-horse.dto';

@Injectable()
export class HorseService {
  constructor(private readonly prismaService: PrismaService) { }

  public async getHorses() {
    const horses = await this.prismaService.horse.findMany();
    return horses;
  }

  public createHorse(createHorseDto: CreateHorseDto) {
    const data = {
      name: createHorseDto.name,
      showName: createHorseDto.showName,
      feed: createHorseDto.feed,
      createdAt: new Date(), // Optional, Prisma can auto-generate this
      updatedAt: new Date(),
    };

    return this.prismaService.horse.create({ data });
  }


  public async updateHorse(id: number, updateHorseDto: UpdateHorseDto): Promise<number> {
    const data = {
      updatedAt: new Date(),
      ...updateHorseDto,
    };

    const updateHorseData = await this.prismaService.horse.update({
      where: { id },
      data,
    });
    return id;
  }

  public async softDeleteHorse(id: number): Promise<number> {
    const softDeleteHorse = await this.prismaService.horse.update({
      where: { id: id },
      data: { deletedAt: new Date() }
    });
    return id;
  }

}

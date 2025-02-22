import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UpdateHorseDto } from '../dto/update-horse.dto';

@Injectable()
export class HorseService {
  constructor(private readonly prismaService: PrismaService) { }

  public async getHorses() {
    const horses = await this.prismaService.horse.findMany();
    return horses;
  }

  public createHorse(data: { showName: string; name: string; feed: string }) {
    return this.prismaService.horse.create({ data });
  }

  public async softDeleteHorse(id: number): Promise<number> {
    const softDeleteHorse = await this.prismaService.horse.update({
      where: { id: id },
      data: { deletedAt: new Date() }
    });
    return id;
  }

  public async updateHorse(id: number, updateHorseDto: UpdateHorseDto): Promise<number> {
    const data = {
      id,
      updatedAt: new Date(),
      ...updateHorseDto,
    };

    const updateHorseData = await this.prismaService.horse.update({
      where: { id: id },
      data,
    });
    console.log(updateHorseData);
    return id;
  }

}

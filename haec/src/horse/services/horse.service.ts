import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { JsonObject } from '@prisma/client/runtime/library';
import { ParamsTokenFactory } from '@nestjs/core/pipes';

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

  public async deleteHorse(id: number): Promise<number> {
    const deleteHorse = await this.prismaService.horse.delete({ where: { id: id }, });
    console.log(deleteHorse);
    return id;
  }

  public async softDeleteHorse(id: number): Promise<number> {
    const softDeleteHorse = await this.prismaService.horse.update({
      where: { id: id },
      data: { deletedAt: new Date() }
    }
    );
    console.log(softDeleteHorse);
    return id;
  }
}

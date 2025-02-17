import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class HorseService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getHorses() {
    return this.prismaService.horse.findMany();
  }

  public writeJSONBody(data: any) {
    console.log('Received data in the service:', data);
    return 'Data logged successfully';
  }
}

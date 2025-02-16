import { Injectable } from '@nestjs/common';

@Injectable()
export class HorseService {
    public async getHorses() {
        return "This is a string";
    }
}

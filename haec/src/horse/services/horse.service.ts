import { Injectable } from '@nestjs/common';
import { Request, Response, NextFunction, request } from 'express';

@Injectable()
export class HorseService {
    public async getHorses() {
        return "This is a string";
    }

    public writeJSONBody(data: any) {
        console.log('Received data in the service:', data);
        return 'Data logged successfully';
    }
}

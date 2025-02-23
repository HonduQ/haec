import { IsOptional, IsString } from 'class-validator';

export class CreateHorseDto {
  @IsString()
  name: string;

  @IsString()
  showName: string;

  @IsString()
  feed: string;
}

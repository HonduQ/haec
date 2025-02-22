import { IsOptional, IsString } from 'class-validator';

export class UpdateHorseDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  showName?: string;

  @IsOptional()
  @IsString()
  feed?: string;
}

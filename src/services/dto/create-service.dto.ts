import { IsDateString, IsNumber, IsObject } from 'class-validator';
import { Barber } from 'src/barber/entities/barber.entity';

export class CreateServiceDto {
  @IsDateString()
  date: Date;

  @IsNumber()
  barberId: number;
}

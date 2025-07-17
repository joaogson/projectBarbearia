import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { IsDateString, IsNumber, IsObject, IsOptional, IsPositive } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {

  @IsNumber()
  @IsOptional()
  clientId?: number;

  @IsNumber()
  @IsOptional()
  BarberId?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;
}

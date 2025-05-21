import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { IsDateString, IsNumber, IsObject, IsOptional } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @IsDateString()
  @IsOptional()
  Date?: Date;
  @IsNumber()
  @IsOptional()
  BarberId?: number;
}

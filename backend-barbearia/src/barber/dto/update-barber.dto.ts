/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateBarberDto } from './create-barber.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBarberDto extends PartialType(CreateBarberDto) {
  @IsString()
  @IsOptional()
  readonly name?: string;
  @IsString()
  @IsOptional()
  readonly email?: string;
  @IsString()
  @IsOptional()
  readonly cellphone?: string;
}

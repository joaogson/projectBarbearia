import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
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

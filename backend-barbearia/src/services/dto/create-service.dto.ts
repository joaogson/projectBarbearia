import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  barberId: number;

  @IsNumber()
  @IsNotEmpty()
  clientId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;
}

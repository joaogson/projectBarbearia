import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BarberService } from './barber.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';

@Controller('barber')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post('create')
  create(@Body() createBarberDto: CreateBarberDto) {
    return this.barberService.create(createBarberDto);
  }

  @Get()
  findAll() {
    return this.barberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.barberService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarberDto: UpdateBarberDto) {
    return this.barberService.update(+id, updateBarberDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.barberService.remove(id);
  }
}

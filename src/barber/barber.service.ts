import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BarberService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBarberDto: CreateBarberDto) {
    try {
      const newBarber = await this.prisma.barber.create({
        data: {
          name: createBarberDto.name,
          email: createBarberDto.email,
          cellphone: createBarberDto.cellphone,
        },
      });
      return newBarber;
    } catch (error) {
      throw new HttpException(
        'Não foi possivel criar o Barbeiro',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findAll() {
    try {
      return this.prisma.barber.findMany();
    } catch (error) {
      throw new HttpException(
        'Não foi possivel buscar os barbeiros!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOne(id: number) {
    try {
      return this.prisma.barber.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Não foi possivel buscar o barbeiro!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, updateBarberDto: UpdateBarberDto) {
    try {
      const findBarber = await this.prisma.barber.findFirst({
        where: {
          id: id,
        },
      });

      if (!findBarber)
        throw new HttpException(
          'Esse barbeiro não existe!',
          HttpStatus.NOT_FOUND,
        );

      const Barber = await this.prisma.barber.update({
        where: {
          id: findBarber.id,
        },
        data: updateBarberDto,
      });

      return Barber;
    } catch (error) {
      throw new HttpException(
        'Não foi possivel atualizar os dados!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    try {
      const Barber = await this.prisma.barber.delete({
        where: {
          id: id,
        },
      });
      return Barber;
    } catch (error) {
      throw new HttpException(
        'Não foi possivel remover o barbeiro!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

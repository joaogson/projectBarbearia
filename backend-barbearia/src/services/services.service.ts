import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    try {
      const barber = await this.prisma.barber.findFirst({
        where: {
          id: {
            equals: createServiceDto.barberId,
          },
        },
      });
      if (!barber) {
        throw new HttpException(
          'Barbeiro não encontrado!',
          HttpStatus.NOT_FOUND,
        );
      }
      const client = await this.prisma.client.findFirst({
        where: {
          id: {
            equals: createServiceDto.clientId,
          },
        },
      });
      if (!client) {
        throw new HttpException(
          'Cliente não encontrado!',
          HttpStatus.NOT_FOUND,
        );
      }

      const service = await this.prisma.service.create({
        data: {
          barberId: barber.id,
          clientId: client.id,
          price: createServiceDto.price,
        },
      });

      return service;
    } catch (error) {
      throw new HttpException(
        'Não foi possivel criar o atendimento!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.service.findMany();
    } catch (error) {
      throw new HttpException(
        'Não foi possivel buscar os barbeiros!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.service.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Não foi possivel buscar os barbeiros!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      const findService = await this.prisma.service.findUnique({
        where: {
          id: id,
        },
      });
      if (!findService)
        throw new HttpException(
          'Não foi possivel achar o Atendimento!',
          HttpStatus.NOT_FOUND,
        );

      const Service = await this.prisma.service.update({
        where: { id: findService.id },
        data: updateServiceDto,
      });

      return Service;
    } catch (error) {
      throw new HttpException(
        'Não foi possivel buscar os barbeiros!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    try {
      const Service = await this.prisma.service.delete({
        where: {
          id: id,
        },
      });
      return Service;
    } catch (error) {
      throw new HttpException(
        'Não foi possivel buscar os barbeiros!',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}

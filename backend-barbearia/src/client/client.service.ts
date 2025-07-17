import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const newClient = await this.prisma.client.create({
        data: {
          name: createClientDto.name,
          email: createClientDto.email,
          cellphone: createClientDto.cellphone,
        },
      });
      return newClient;
    } catch (error) {
      throw new HttpException(
        'Não foi possível criar o cliente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.client.findMany();
    } catch (error) {
      throw new HttpException(
        'Não foi possível buscar os clientes.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.client.findUnique({
        where: { id: id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException(
        'Não foi possível buscar o cliente.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    await this.findOne(id);
    try {
      return await this.prisma.client.update({
        where: { id: id },
        data: updateClientDto,
      });
    } catch (error) {
      throw new HttpException(
        'Não foi possível atualizar o cliente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    await this.findOne(id); // Reutiliza a verificação do findOne
    try {
      const Client = await this.prisma.client.delete({
        where: { id },
      });

      return Client;
    } catch (error) {
      throw new HttpException(
        'Não foi possível remover o cliente.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

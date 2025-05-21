import { Service } from 'src/services/entities/service.entity';

export class Barber {
  id: number;
  name: string;
  cellphone: string;
  email: string;
  Services: Service[];
}

import type { Service } from "./Service";

export interface Barber {
  id?: number;
  name: string;
  email: string;
  cellphone: string;
  services?: Service[];
}

import type { Service } from "./Service";

export type Client = {
  id?: number;
  name: string;
  email: string;
  cellphone: string;
  services?: Service[];
};

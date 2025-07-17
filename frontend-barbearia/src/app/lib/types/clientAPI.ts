import axios from "axios";
import { Client } from "./Client";

const api = axios.create({
  baseURL: "http://localhost:3000/client",
});

export const getClients = () => api.get<Client[]>("/");
export const getClient = (id: number) => api.get<Client>(`/${id}`);
export const createClient = (data: Client) => api.post("/create", data);
export const updateClient = (id: number, data: Partial<Client>) => api.patch(`/${id}`, data);
export const deleteClient = (id: number) => api.delete(`/${id}`);

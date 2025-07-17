"use client";
import { Service } from "../src/app/lib/types/Service";

type Barber = { id: number; name: string };
type Client = { id: number; name: string };
type ListServiceProps = {
  services: Service[];
  barbers: Barber[];
  clients: Client[];
  onSelect: (service: Service) => void;
};

export default function ListService({ services, barbers, clients, onSelect }: ListServiceProps) {
  function getBarberName(id: number) {
    return barbers.find((b) => b.id === id)?.name || "-";
  }
  function getClientName(id: number) {
    return clients.find((c) => c.id === id)?.name || "-";
  }
  // Exibe o horário como string bruta
  return (
    <div>
      <h2>Atendimentos</h2>
      <ul className="list-container">
        {services.map((service) => (
          <li key={service.id} onClick={() => onSelect(service)} className="list-item-black">
            Barbeiro: {getBarberName(service.barberId)} | Cliente: {getClientName(service.clientId)} | Preço: R$ {service.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

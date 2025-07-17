"use client";
import { Client } from "../src/app/lib/types/Client";

type ListClientProps = {
  clients: Client[];
  onSelect: (client: Client) => void;
};

export default function ListClient({ clients, onSelect }: ListClientProps) {
  return (
    <div>
      <h2>Clientes</h2>
      <ul className="list-container">
        {clients.map((client) => (
          <li key={client.id} onClick={() => onSelect(client)} className="list-item-black">
            {client.name} - {client.email} - {client.cellphone}
            {client.services && client.services.length > 0 && (
              <ul style={{ margin: "4px 0 0 16px", fontSize: "0.95em", color: "#555", background: "#f8f8f8", borderRadius: 4, padding: 8 }}>
                {client.services.map((service) => (
                  <li key={service.id} style={{ marginBottom: 2 }}>
                    <strong>Barbeiro:</strong> {service.barberId || '-'} | <strong>Preço:</strong> R$ {service.price}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

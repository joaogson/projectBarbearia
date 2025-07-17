"use client";
import { Barber } from "../src/app/lib/types/Barber";

type ListBarberProps = {
  barbers: Barber[];
  onSelect: (barber: Barber) => void;
};

export default function ListBarber({ barbers, onSelect }: ListBarberProps) {
  return (
    <div>
      <h1>Barbers</h1>
      <ul className="list-container" style={{ listStyle: "none", padding: 0 }}>
        {barbers.map((b) => (
            <li
              key={b.id}
              onClick={() => onSelect(b)}
              className="list-item-black"
            >
            {b.name} - ({b.email} - {b.cellphone})
            {b.services && b.services.length > 0 && (
              <ul style={{ margin: "4px 0 0 16px", fontSize: "0.95em", color: "#555", background: "#f8f8f8", borderRadius: 4, padding: 8 }}>
                {b.services.map((service) => (
                  <li key={service.id} style={{ marginBottom: 2 }}>
                    <strong>Cliente:</strong> {service.clientId || "-"} | <strong>Preço:</strong> R$ {service.price}
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

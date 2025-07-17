import { Service } from "../src/app/lib/types/Service";

export default function ServicesList({ services }: { services?: Service[] }) {
  if (!services || services.length === 0) {
    return <div style={{ color: "#888", fontStyle: "italic" }}>Nenhum serviço vinculado.</div>;
  }
  return (
    <div>
      <h3>Serviços vinculados</h3>
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {services.map((service) => (
          <li key={service.id}>
            Barbeiro: {service.barberId || "-"} | Cliente: {service.clientId || "-"} | Preço: R$ {service.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";
import { Service } from "../src/app/lib/types/Service";
import { useState, useEffect } from "react";
import { getBarbers } from "../src/app/lib/types/barberAPI";
import { getClients } from "../src/app/lib/types/clientAPI";

type FormServiceProps = {
  onCreate: (values: { barberId: number; clientId: number; price: number }) => void;
  onUpdate: (values: { barberId: number; clientId: number; price: number }) => void;
  initialValues?: Service | null;
};

export default function FormService({ onCreate, onUpdate, initialValues }: FormServiceProps) {
  const [form, setForm] = useState({
    barberId: 0,
    clientId: 0,
    price: 0,
  });
  const [barbers, setBarbers] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    getBarbers().then((res) => setBarbers(res.data));
    getClients().then((res) => setClients(res.data));
  }, []);

  useEffect(() => {
    if (initialValues) {
      setForm({
        barberId: initialValues.barberId || 0,
        clientId: initialValues.clientId || 0,
        price: initialValues.price,
      });
    } else {
      setForm({ barberId: 0, clientId: 0, price: 0 });
    }
  }, [initialValues]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...form };
    if (initialValues) {
      onUpdate(payload);
    } else {
      onCreate(payload);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="central-form">
      <label>Barbeiro:</label>
      <select name="barberId" value={form.barberId} onChange={handleChange} required>
        <option value="">Selecione</option>
        {barbers.map((b: any) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
      <label>Cliente:</label>
      <select name="clientId" value={form.clientId} onChange={handleChange} required>
        <option value="">Selecione</option>
        {clients.map((c: any) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <label style={{ textAlign: 'center', width: '100%' }}>Preço:</label>
      <input 
        name="price" 
        type="number" 
        value={form.price} 
        onChange={handleChange} 
        placeholder="Preço" 
        required 
        min={0} 
        step={0.01} 
        style={{ textAlign: 'center', width: '100%', maxWidth: 180, margin: '0 auto 16px auto', display: 'block' }}
      />
      <div className="button-row">
        <button type="submit" className={initialValues ? "btn-update" : "btn-create"}>{initialValues ? "Update" : "Create"}</button>
      </div>
    </form>
  );
}

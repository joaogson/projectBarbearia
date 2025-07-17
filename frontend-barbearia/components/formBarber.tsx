"use client";
import { Barber } from "@/app/lib/types/Barber";
import { useState, useEffect } from "react";

type FormBarberProps = {
  onCreate: (values: { name: string; email: string; cellphone: string }) => void;
  onUpdate: (values: { name: string; email: string; cellphone: string }) => void;
  initialValues?: Barber | null;
};

export default function FormBarber({ onCreate, onUpdate, initialValues }: FormBarberProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cellphone: "",
  });

  useEffect(() => {
    if (initialValues) {
      setForm({
        name: initialValues.name,
        email: initialValues.email,
        cellphone: initialValues.cellphone,
      });
    } else {
      setForm({ name: "", email: "", cellphone: "" });
    }
  }, [initialValues]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (initialValues) {
      onUpdate(form);
    } else {
      onCreate(form);
    }
  }

  return (
    <form  className="central-form" onSubmit={handleSubmit}>
      <label>Nome do barbeiro</label>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" required />
      <label style={{ textAlign: 'center', width: '100%' }}>Email</label>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <label>Telefone</label>
      <input name="cellphone" value={form.cellphone} onChange={handleChange} placeholder="Cellphone" required />
      <button type="submit">{initialValues ? "Update" : "Create"}</button>
    </form>
  );
}

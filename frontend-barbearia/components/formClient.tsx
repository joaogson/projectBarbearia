"use client";
import { Client } from "../src/app/lib/types/Client";
import { useState, useEffect } from "react";

type FormClientProps = {
  onCreate: (values: { name: string; email: string; cellphone: string }) => void;
  onUpdate: (values: { name: string; email: string; cellphone: string }) => void;
  initialValues?: Client | null;
};

export default function FormClient({ onCreate, onUpdate, initialValues }: FormClientProps) {
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
    <form className="central-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Nome" required />
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <label htmlFor="cellphone">Celular:</label>
      <input id="cellphone" name="cellphone" value={form.cellphone} onChange={handleChange} placeholder="Celular" required />
      <div className="button-row">
        <button type="submit" className={initialValues ? "btn-update" : "btn-create"}>{initialValues ? "Update" : "Create"}</button>
      </div>
    </form>
  );
}

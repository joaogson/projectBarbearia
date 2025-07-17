"use client";
import ListarBarber from "../../../components/ListBarber";
import Menu from "../../../components/menu";
import Form from "../../../components/formBarber";
import ButtonAcao from "../../../components/ButtonAcao";
import { createBarber, updateBarber, getBarbers, deleteBarber } from "../lib/types/barberAPI";
import React, { useState, useEffect } from "react";
import ServicesList from "../../../components/ServicesList";
import { Barber } from "../lib/types/Barber";

type FormProps = {
  onCreate: (values: { name: string; email: string; cellphone: string }) => void;
  onUpdate: (values: { name: string; email: string; cellphone: string }) => void;
  initialValues?: Barber | null;
};

export default function BarberPage() {
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [barbers, setBarbers] = useState<Barber[]>([]);

  const loadBarbers = async () => {
    getBarbers()
      .then((response) => setBarbers(response.data))
      .catch((error) => console.error("Error loading barbers:", error));
  };

  useEffect(() => {
    loadBarbers();
  }, []);

  function handleCreate(values: { name: string; email: string; cellphone: string }) {
    createBarber(values)
      .then((response) => {
        console.log("Barber created:", response.data);
        loadBarbers();
      })
      .catch((error) => {
        console.error("Error creating barber:", error);
      });
  }

  function handleUpdate(values: { name: string; email: string; cellphone: string }) {
    if (selectedBarber && selectedBarber.id) {
      updateBarber(selectedBarber.id, values)
        .then((response) => {
          console.log("Barber updated:", response.data);
          loadBarbers();
        })
        .catch((error) => {
          console.error("Error updating barber:", error);
        });
    }
  }

  function handleDelete(id: number) {
    deleteBarber(id)
      .then((response) => {
        console.log("Barber deleted:", response.data);
        loadBarbers(); // Recarrega a lista após deletar
        setSelectedBarber(null); // Limpa o barbeiro selecionado
      })
      .catch((error) => {
        console.error("Error deleting barber:", error);
      });
  }

  const contentRef = React.useRef<HTMLDivElement>(null);

  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setSelectedBarber(null);
    }
  }

  return (
    <div onClick={handleContainerClick} style={{ minHeight: "100vh", background: "rgb(80, 106, 136)" }}>
      <div ref={contentRef} style={{ display: "flex", gap: 32 }}>
        <div style={{ flex: 1 }}>
          <h1>Barber Page</h1>
          <Menu />
          <ListarBarber barbers={barbers} onSelect={setSelectedBarber} />
          <Form key={selectedBarber?.id || "new"} onCreate={handleCreate} onUpdate={handleUpdate} initialValues={selectedBarber} />
          <div className="button-row">
            <ButtonAcao
              texto="Delete"
              onClick={() => {
                if (selectedBarber?.id) {
                  handleDelete(selectedBarber.id);
                }
              }}
              disabled={!selectedBarber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

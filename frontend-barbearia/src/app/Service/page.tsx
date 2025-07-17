"use client";
import ListService from "../../../components/ListService";
import { getBarbers } from "../lib/types/barberAPI";
import { getClients } from "../lib/types/clientAPI";
import Menu from "../../../components/menu";
import FormService from "../../../components/formService";
import ButtonAcao from "../../../components/ButtonAcao";
import { createService, updateService, getServices, deleteService } from "../lib/types/serviceAPI";
import React, { useState, useEffect } from "react";
import { Service } from "../lib/types/Service";

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [barbers, setBarbers] = useState<{ id: number; name: string }[]>([]);
  const [clients, setClients] = useState<{ id: number; name: string }[]>([]);
  const loadServices = async () => {
    getServices()
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error loading services:", error));
  };

  useEffect(() => {
    loadServices();
    getBarbers().then((res) => setBarbers(res.data.filter((b: any) => b.id !== undefined).map((b: any) => ({ id: Number(b.id), name: b.name }))));
    getClients().then((res) => setClients(res.data.filter((c: any) => c.id !== undefined).map((c: any) => ({ id: Number(c.id), name: c.name }))));
  }, []);

  function handleCreate(values: { barberId: number; clientId: number; price: number }) {
    createService(values)
      .then((response) => {
        console.log("Service created:", response.data);
        loadServices();
      })
      .catch((error) => {
        console.error("Error creating service:", error);
      });
  }

  function handleUpdate(values: { barberId: number; clientId: number; price: number }) {
    if (selectedService && selectedService.id) {
      updateService(selectedService.id, values)
        .then((response) => {
          console.log("Service updated:", response.data);
          loadServices();
        })
        .catch((error) => {
          console.error("Error updating service:", error);
        });
    }
  }

  function handleDelete(id: number) {
    deleteService(id)
      .then((response) => {
        console.log("Service deleted:", response.data);
        loadServices();
        setSelectedService(null);
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      });
  }

  // Ref para ignorar clique dentro do conteúdo
  const contentRef = React.useRef<HTMLDivElement>(null);

  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setSelectedService(null);
    }
  }

  return (
    <div onClick={handleContainerClick} style={{ minHeight: "100vh", background: "rgb(80, 106, 136)" }}>
      <div ref={contentRef}>
        <h1>Service Page</h1>
        <Menu />
        <ListService services={services} barbers={barbers} clients={clients} onSelect={setSelectedService} />
        <FormService key={selectedService?.id || "new"} onCreate={handleCreate} onUpdate={handleUpdate} initialValues={selectedService} />
        <div className="button-row">
          <ButtonAcao
            texto="Delete"
            onClick={() => {
              if (selectedService?.id) {
                handleDelete(selectedService.id);
              }
            }}
            disabled={!selectedService}
          />
        </div>
      </div>
    </div>
  );
}

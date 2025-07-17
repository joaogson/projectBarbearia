"use client";
import ListClient from "../../../components/ListClient";
import Menu from "../../../components/menu";
import FormClient from "../../../components/formClient";
import ButtonAcao from "../../../components/ButtonAcao";
import { createClient, updateClient, getClients, deleteClient } from "../lib/types/clientAPI";
import React, { useState, useEffect } from "react";
import ServicesList from "../../../components/ServicesList";
import { Client } from "../lib/types/Client";

export default function ClientPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [clients, setClients] = useState<Client[]>([]);

  const loadClients = async () => {
    getClients()
      .then((response) => setClients(response.data))
      .catch((error) => console.error("Error loading clients:", error));
  };

  useEffect(() => {
    loadClients();
  }, []);

  function handleCreate(values: Client) {
    createClient({
      name: values.name,
      email: values.email,
      cellphone: values.cellphone,
    })
      .then((response) => {
        console.log("Client created:", response.data);
        loadClients();
      })
      .catch((error) => {
        console.error("Error creating client:", error);
      });
  }

  function handleUpdate(values: Partial<Client>) {
    if (selectedClient && selectedClient.id) {
      updateClient(selectedClient.id, values)
        .then((response) => {
          console.log("Client updated:", response.data);
          loadClients();
        })
        .catch((error) => {
          console.error("Error updating client:", error);
        });
    }
  }

  function handleDelete(id: number) {
    deleteClient(id)
      .then((response) => {
        console.log("Client deleted:", response.data);
        loadClients();
        setSelectedClient(null);
      })
      .catch((error) => {
        console.error("Error deleting client:", error);
      });
  }

  // Ref para ignorar clique dentro do conteúdo
  const contentRef = React.useRef<HTMLDivElement>(null);

  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setSelectedClient(null);
    }
  }

  return (
    <div onClick={handleContainerClick} style={{ minHeight: "100vh", background: "rgb(80, 106, 136)" }}>
      <div ref={contentRef} style={{ display: "flex", gap: 32 }}>
        <div style={{ flex: 1 }}>
          <h1>Client Page</h1>
          <Menu />
          <ListClient clients={clients} onSelect={setSelectedClient} />
          <FormClient key={selectedClient?.id || "new"} onCreate={handleCreate} onUpdate={handleUpdate} initialValues={selectedClient} />
          <div className="button-row">
            <ButtonAcao
              texto="Delete"
              onClick={() => {
                if (selectedClient?.id) {
                  handleDelete(selectedClient.id);
                }
              }}
              disabled={!selectedClient}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

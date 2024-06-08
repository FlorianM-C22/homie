// components/TableComponent.js
"use client";

import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { supabase } from "@/lib/supabase";

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "category",
    label: "CATEGORY",
  },
];

const TableComponent = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("snippets") // Remplacez "users" par le nom de votre table
          .select("id, name, category");
        if (error) {
          throw error;
        }
        if (data) {
          const formattedData = data.map((item) => ({
            key: item.id, // Utilisez l'identifiant de votre table comme clé
            name: item.name,
            category: item.category,
          }));
          setRows(formattedData);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-4/5 max-w-3xl mx-auto p-5">
      <Table
        aria-label="Tableau dynamique avec des données de la base de données"
        className="w-full min-h-[300px]"
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;

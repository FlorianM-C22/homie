"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

// Définition des colonnes
const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "created_at",
    label: "CREATED AT",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

const BuiltSnippets = () => {
  const [rows, setRows] = useState<{ key: string; created_at: string; name: string; id: string; code: string; }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("assembled_snippets")
          .select("id, created_at, code, name"); // Ajoutez "name" à la sélection

        if (error) {
          throw error;
        }

        if (data) {
          const formattedData = data.map((item) => ({
            key: item.id,
            created_at: new Date(item.created_at).toLocaleDateString(),
            name: item.name,
            id: item.id,
            code: item.code,
          }));
          setRows(formattedData);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);

  // Fonction pour générer et télécharger un fichier texte
  const handleDownload = (fileId: string, codeContent: string) => {
    try {
      if (!codeContent) {
        alert("Pas de contenu à télécharger pour cet ID");
        return;
      }

      // Créer un Blob avec le contenu de la colonne "code"
      const blob = new Blob([codeContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      // Créer un lien pour déclencher le téléchargement
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `docker-compose.yaml`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors de la création du fichier:", error);
    }
  };

  return (
    <div className="mx-auto p4 bg-white rounded-lg border-1 border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead className="text-center" key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((item) => (
            <TableRow key={item.key}>
              <TableCell className="text-center">{item.name}</TableCell>
              <TableCell className="text-center">{item.created_at}</TableCell>
              <TableCell className="text-center">
                <button
                  onClick={() => handleDownload(item.id, item.code)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
                >
                  Download
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BuiltSnippets;

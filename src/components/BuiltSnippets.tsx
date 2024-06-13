"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Définition des colonnes
const columns = [
  {
    key: "created_at",
    label: "CREATED AT",
  },
  {
    key: "id",
    label: "ID",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

const BuiltSnippets = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("assembled_snippets") // Remplacez par le nom de votre table
          .select("id, created_at, code"); // Inclure la colonne "code"

        if (error) {
          throw error;
        }

        if (data) {
          const formattedData = data.map((item) => ({
            key: item.id,
            created_at: new Date(item.created_at).toLocaleDateString(),
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
  const handleDownload = (fileId, codeContent) => {
    try {
      if (!codeContent) {
        alert("Pas de contenu à télécharger pour cet ID");
        return;
      }

      // Créer un Blob avec le contenu de la colonne "code"
      const blob = new Blob([codeContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      // Créer un lien pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `docker-compose.yaml`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors de la création du fichier:", error);
    }
  };

  return (
      <div className="w-4/5 max-w-3xl mx-auto p-5">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((item) => (
              <TableRow key={item.key}>
                <TableCell>{item.created_at}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>
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

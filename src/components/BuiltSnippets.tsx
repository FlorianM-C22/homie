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
  const [rows, setRows] = useState<{
    key: string;
    created_at: string;
    name: string;
    id: string;
    code: string;
  }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("assembled_snippets")
          .select("id, created_at, code, name");

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

  const handleDownload = (fileId: string, codeContent: string) => {
    try {
      if (!codeContent) {
        alert("Pas de contenu à télécharger pour cet ID");
        return;
      }

      const blob = new Blob([codeContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

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
    <div className="relative mx-auto p-4 bg-white rounded-lg border border-gray-200 shadow-sm min-h-[250px] max-h-[250px] overflow-y-auto">
      <Table className="w-full table-auto">
        <TableHeader className="sticky top-0 bg-white shadow">
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className="text-center">
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            rows.map((item) => (
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
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BuiltSnippets;

"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import jsYaml from "js-yaml";
import { supabase } from "@/lib/supabase";
import Editor from '@monaco-editor/react';

interface IDataCategory {
  category: string;
  content: any;
  id: number;
  name: string;
}

const CategoryMultiSelect = () => {
  const [groupedData, setGroupedData] = useState<{ [key: string]: IDataCategory[] }>({});
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: any }>({});
  const [contentData, setContentData] = useState<{ [key: number]: any }>({});
  const [yamlContent, setYamlContent] = useState("");
  const [nameText, setNameText] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("snippets")
          .select("id, name, category, content");

        if (error) {
          throw error;
        }
        if (data) {
          const grouped = groupByCategory(data);
          setGroupedData(grouped);
          setContentData(
            data.reduce((acc: any, item: IDataCategory) => {
              acc[item.id] = item.content;
              return acc;
            }, {})
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);

  const groupByCategory = (data: IDataCategory[]) => {
    return data.reduce((acc: any, item: IDataCategory) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  const handleSelectionChange = (category: string, selectedKeys: any) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: selectedKeys,
    }));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNameText(event.target.value);
  };

  const generateYamlContent = () => {
    let combinedContent: any = { version: "3", services: {} };

    Object.keys(selectedItems).forEach((category) => {
      selectedItems[category].forEach((id: number) => {
        const content = contentData[id];
        if (content) {
          try {
            const jsonContent = typeof content === "string" ? JSON.parse(content) : content;
            if (jsonContent.services) {
              combinedContent.services = {
                ...combinedContent.services,
                ...jsonContent.services,
              };
            } else {
              console.warn(`Pas de services trouvés pour l'ID ${id}`);
            }
          } catch (e) {
            console.error(`Erreur lors de la lecture du JSON pour l'ID ${id}:`);
            alert(`Erreur lors de la lecture du JSON pour l'ID ${id}:`);
          }
        }
      });
    });

    if (Object.keys(combinedContent.services).length > 0) {
      const yaml = jsYaml.dump(combinedContent);
      setYamlContent(yaml);
    } else {
      setYamlContent("");
      alert("Aucune donnée valide trouvée pour la génération du fichier YAML.");
    }
  };

  const saveAssembledSnippet = async () => {
    try {
      const authToken = supabase.auth.getSession();

      if (!authToken) {
        throw new Error('Authorization token not provided');
      }

      const { data: userResponse, error } = await supabase.auth.getUser();

      if (error || !userResponse || !userResponse.user) {
        throw new Error('User not authenticated');
      }

      const userId = userResponse.user.id;
      console.log('User ID:', userId);

      const { data, error: insertError } = await supabase
        .from("assembled_snippets")
        .insert([{ user_id: userId, code: yamlContent, name: nameText }]);

      if (insertError) {
        throw insertError;
      }

      console.log("Snippet assemblé sauvegardé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du snippet assemblé :");
    }
  };

  const handleDownload = async () => {
    await saveAssembledSnippet();
    console.log("Contenu YAML à sauvegarder :", yamlContent);

    const blob = new Blob([yamlContent], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);

    const link = document.createElement("a");
    link.href = url;
    link.download = "docker-compose.yml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCliDownload = async () => {
    await saveAssembledSnippet();
    console.log("Génération du lien de téléchargement pour CLI");

    const blob = new Blob([yamlContent], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);

    const cliCommand = `wget -O docker-compose.yml ${url}`;
    navigator.clipboard.writeText(cliCommand).then(() => {
      alert("Commande `wget` copiée dans le presse-papier !");
    }).catch(err => {
      console.error('Erreur lors de la copie dans le presse-papier:', err);
    });
  };

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="flex flex-col p-4 bg-white shadow-lg rounded-lg space-y-4 w-1/3 h-full">
        <textarea
          value={nameText}
          onChange={handleNameChange}
          placeholder="Nom du snippet"
          className="w-full p-2 border rounded resize-none"
          rows={1}
          style={{ minHeight: "40px", maxHeight: "40px" }}
        />
        {Object.keys(groupedData).map((category) => (
          <div key={category} className="w-full">
            <Select
              label={`Select ${category}`}
              placeholder={`Select ${category}`}
              selectionMode="multiple"
              selectedKeys={selectedItems[category] || []}
              onSelectionChange={(selectedKeys) => handleSelectionChange(category, selectedKeys)}
              className="w-full"
            >
              {groupedData[category].map((item: IDataCategory) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
          </div>
        ))}
        <Button color="primary" onClick={generateYamlContent}>
          Build !
        </Button>
        <Button color="primary" onClick={handleDownload}>
          Télécharger docker-compose.yml
        </Button>
        <Button color="secondary" onClick={handleCliDownload}>
          CLI Download
        </Button>
      </div>
      <div className="flex-grow h-full">
        <Editor
          height="100%"
          width="100%"
          language="yaml"
          value={yamlContent}
          options={{
            readOnly: false,
            minimap: { enabled: false },
          }}
          onChange={(value) => setYamlContent(value || "")}
        />
      </div>
    </div>
  );
};

export default CategoryMultiSelect;

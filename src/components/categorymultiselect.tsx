"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import jsYaml from "js-yaml";
import { supabase } from "@/lib/supabase";

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
  const [rawData, setRawData] = useState<IDataCategory[]>([]);

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
          setRawData(data);

          const contentMap = data.reduce((acc: any, item: IDataCategory) => {
            acc[item.id] = item.content;
            return acc;
          }, {});
          setContentData(contentMap);
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
    const e = event.target.value;
    setNameText(e);
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
      // Récupérer l'utilisateur à partir du token d'authentification
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

      // Insérer les données dans la table `assembled_snippets`
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
    // Sauvegarder le snippet assemblé avant de télécharger le fichier
    await saveAssembledSnippet();
    console.log("Contenu YAML à sauvegarder :", yamlContent);
    // Télécharger le fichier docker-compose.yml
    const blob = new Blob([yamlContent], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "docker-compose.yml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <div className="p-4 bg-white shadow-lg rounded-lg space-y-4">
        {Object.keys(groupedData).map((category) => (
          <div key={category} className="w-full">
            <Select
              label={`Select ${category}`}
              placeholder={`Select ${category}`}
              selectionMode="multiple"
              selectedKeys={selectedItems[category] || []}
              onSelectionChange={(selectedKeys) => handleSelectionChange(category, selectedKeys)}
              className="w-full"
              style={{ width: "300px" }}
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
        <textarea
          value={nameText}
          onChange={handleNameChange}
          placeholder="Nom du snippet"
          className="w-full p-2 border rounded"
          rows={3}
        />
        {yamlContent && (
          <div className="mt-4 w-full">
            <pre className="bg-gray-200 p-2 rounded">{yamlContent}</pre>
            <Button color="primary" onClick={handleDownload}>
              Télécharger docker-compose.yml
            </Button>
          </div>
        )}
      </div>
  );
};

export default CategoryMultiSelect;

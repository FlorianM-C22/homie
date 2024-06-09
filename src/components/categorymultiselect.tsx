"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import {Button } from "@nextui-org/button";
import { supabase } from "@/lib/supabase";
import jsYaml from "js-yaml";

// Fonction pour grouper les données par catégorie
const groupByCategory = (data) => {
    return data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
};

const CategoryMultiSelect = () => {
    const [groupedData, setGroupedData] = useState({});
    const [selectedItems, setSelectedItems] = useState({});
    const [contentData, setContentData] = useState({});
    const [yamlContent, setYamlContent] = useState("");
    const [rawData, setRawData] = useState([]);

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

                    const contentMap = data.reduce((acc, item) => {
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

    const handleSelectionChange = (category, selectedKeys) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [category]: selectedKeys,
        }));
    };

    const generateYamlContent = () => {
        let combinedContent = { version: "3", services: {} };

        Object.keys(selectedItems).forEach((category) => {
            selectedItems[category].forEach((id) => {
                const content = contentData[id];
                if (content) {
                    try {
                        const jsonContent = typeof content === "string" ? JSON.parse(content) : content;
                        if (jsonContent.services) {
                            combinedContent.services = {
                                ...combinedContent.services,
                                ...jsonContent.services
                            };
                        } else {
                            console.warn(`Pas de services trouvés pour l'ID ${id}`);
                        }
                    } catch (e) {
                        console.error(`Erreur lors de la lecture du JSON pour l'ID ${id}:`, e.message);
                        alert(`Erreur lors de la lecture du JSON pour l'ID ${id}: ${e.message}`);
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

    const handleDownload = () => {
        const blob = new Blob([yamlContent], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'docker-compose.yml';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
                            {groupedData[category].map((item) => (
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
                {yamlContent && (
                    <div className="mt-4 w-full">
                        <pre className="bg-gray-200 p-2 rounded">{yamlContent}</pre>
                        <Button color="primary" onClick={handleDownload}>
                            Download docker-compose.yml
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryMultiSelect;

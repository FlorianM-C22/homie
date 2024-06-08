"use client";

import React, { useEffect, useState } from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { supabase } from "@/lib/supabase";

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

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from("snippets") // Remplacez par le nom de votre table
                    .select("id, name, category"); // Sélectionnez les colonnes nécessaires

                if (error) {
                    throw error;
                }
                if (data) {
                    const grouped = groupByCategory(data);
                    setGroupedData(grouped);
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

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {Object.keys(groupedData).map((category) => (
                <div key={category} className="max-w-xs">
                    <Select
                        label={`Select ${category}`}
                        placeholder={`Select ${category}`}
                        selectionMode="multiple"
                        selectedKeys={selectedItems[category] || []}
                        onSelectionChange={(selectedKeys) => handleSelectionChange(category, selectedKeys)}
                        style={{ width: "300px" }} // Set the width to 300px
                    >
                        {groupedData[category].map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                                {item.name}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            ))}
        </div>
    );
    };

  export default CategoryMultiSelect;

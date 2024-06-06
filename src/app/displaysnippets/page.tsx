"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import SnippetList from '@/components/snippet-list';

const SnippetPage: React.FC = () => {
    const [snippets, setSnippets] = useState<any[]>([]);
    const [category, setCategory] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('snippets')
                    .select('*');
                if (error) {
                    throw error;
                }
                if (data) {
                    setSnippets(data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des snippets:', error);
            }
        }

        fetchData();
    }, []);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const filteredSnippets = category
        ? snippets.filter(snippet => snippet.category === category)
        : snippets;

    return (
        <div>
            <h1>Services</h1>
            <div>
                <label htmlFor="category">Select Category:</label>
                <select id="category" onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="media">Media</option>
                    <option value="automation">Automation</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <SnippetList snippets={filteredSnippets} />
        </div>
    );
};

export default SnippetPage;

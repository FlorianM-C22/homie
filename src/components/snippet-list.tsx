// SnippetList.tsx : Composant pour afficher une liste de snippets
import React from 'react';
import SnippetItem from '@/components/snippet-item';

interface SnippetListProps {
    snippets: any[];
}

const SnippetList: React.FC<SnippetListProps> = ({ snippets }) => {
    return (
        <div>
            {snippets.map(snippet => (
                <SnippetItem key={snippet.id} {...snippet} />
            ))}
        </div>
    );
};

export default SnippetList;

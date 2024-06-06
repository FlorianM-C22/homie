// SnippetItem.tsx : Composant pour afficher un snippet individuel
import React from 'react';

interface SnippetItemProps {
  id: string;
  name: string;
  category: string;
}

const SnippetItem: React.FC<SnippetItemProps> = ({ name }) => {
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  };

export default SnippetItem;

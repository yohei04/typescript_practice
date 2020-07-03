import React from 'react';

interface CharacterGridProps {
  items: any;
  isLoading: boolean;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <span className="cards">
      {items.map((item: any) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
    </span>
  );
};
export default CharacterGrid;

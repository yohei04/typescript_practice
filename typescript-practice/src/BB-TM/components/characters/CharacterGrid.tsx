import React from 'react';
import { CharacterType } from '../../CharacterTypes';

interface CharacterGridProps {
  items: CharacterType[];
  isLoading: boolean;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <span className="cards">
      {items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
    </span>
  );
};
export default CharacterGrid;

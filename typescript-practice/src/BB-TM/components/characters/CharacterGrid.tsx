import React from 'react';
import { CharacterType } from '../../CharacterTypes';
import CharacterItem from './CharacterItem';

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
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </span>
  );
};
export default CharacterGrid;

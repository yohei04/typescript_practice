import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import { CharacterType } from './CharacterTypes';

const App = () => {
  const [items, setItems] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, [query]);


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q: string) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;

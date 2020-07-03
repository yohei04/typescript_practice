import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/ui/Header'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import { CharacterType } from './CharacterTypes';

const App = () => {
  const [items, setItems] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters`);

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItem()
  }, [])

  return (
    <div className='container'>
      <Header />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  )
}

export default App


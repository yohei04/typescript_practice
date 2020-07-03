import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/ui/Header'
import { result } from 'lodash'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState<any>([])
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
    </div>
  )
}

export default App


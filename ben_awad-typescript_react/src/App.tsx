import React from 'react';
import './App.css';
// import { TextField } from './TextField';

const App: React.FC = () => {
  interface Item {
    id: number
    title: string
  }

  const items: Item[] = [
    {
      id: 1,
      title: '一番高い商品'
    },
    {
      id: 2,
      title: '一番ダサい商品'
    }
  ]

  const message: string = 'こんにちは React!!'
  return (
    <div>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App



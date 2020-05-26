import React from 'react';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField text='hello' person={{ firstName: 'test', lastName: '' }} />
    </div>
  )
}

export default App



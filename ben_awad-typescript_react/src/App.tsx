import React from 'react';
import './App.css';
// import { TextField } from './TextField';

interface Props {
  message: string
}

const Child: React.FC<Props> = props => {
  return (
    <p>{ props.message }</p>
  )
}

const App: React.FC = () => {
  return (
    <div>
      <Child message="子のコンポーネントに渡す" />
    </div>
  )
}

export default App



import React, { useState } from "react";
import styled from 'styled-components'
import "./App.css";

const Title = styled.h1`
  color: green;
  background: blue
`

const App: React.FC = () => {

  const [blue, setBlue] = useState<boolean>(false)

  const changeColor = () => {
    return setBlue(!blue);
  }

  return (
    <div>
      <Title>Reactスタイル</Title>
      <button onClick={changeColor}>color change</button>
    </div>
  );
};

export default App;

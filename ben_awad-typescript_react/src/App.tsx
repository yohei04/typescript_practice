import React from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>

const App: React.FC = () => {
  const items: string[] = [
    "test1", "test2", "test3" 
  ]

  return (
    <div>
      {items.map((item, i) => (
        <li key={i}> {item} </li>
      ))}
    </div>
  );
};

export default App;

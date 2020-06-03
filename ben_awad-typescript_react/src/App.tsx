import React from "react";
import "./App.css";

type Item = {
  id: number;
  title: string;
};

const App: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      title: "item1",
    },
    {
      id: 2,
      title: "item2",
    },
    {
      id: 3,
      title: "item3",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>
          {" "}
          {item.id} - {item.title}{" "}
        </li>
      ))}
    </div>
  );
};

export default App;

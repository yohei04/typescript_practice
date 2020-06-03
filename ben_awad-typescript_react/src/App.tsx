import React, { Children } from "react";
import "./App.css";
import Child from "./components/Child";

const App: React.FC = () => {
  return (
    <div>
      <Child message="子コンポーネントに渡す">
        <h1> ちるどれん</h1>
      </Child>
    </div>
  );
};

export default App;

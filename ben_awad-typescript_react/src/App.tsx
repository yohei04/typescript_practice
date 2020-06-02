import React from "react";
import "./App.css";
import TextField from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField text="text" person={{ firstName: "", lastName: "" }} />
    </div>
  );
};

export default App;

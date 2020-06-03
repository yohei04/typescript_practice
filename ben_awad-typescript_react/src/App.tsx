import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  
 const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setMessage(e.target.value);
  }


  return (
    <div>
      <h1>{message}</h1>
      <input type="text" value={message} onChange={handleMessage} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

interface InputProps {
  addItem: AddItem;
}

const Input: React.FC<InputProps> = ({ addItem }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    addItem(input);
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
      </form>
    </>
  );
};
export default Input;

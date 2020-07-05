import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const toggleThemes = useContext(ThemeContext);

  return <button>Toggle the theme</button>;
}

export default ThemeToggle

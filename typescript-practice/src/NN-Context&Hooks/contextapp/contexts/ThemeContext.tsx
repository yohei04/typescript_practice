import React, { createContext, useState } from 'react';
import { Themes } from '../types';

const initialThemes: Themes = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

export const ThemeContext = createContext(initialThemes);


const ThemeContextProvider: React.FC = (props) => {
  const [themes, setThemes] = useState(initialThemes);
  
  const toggleThemes = () => {
    setThemes({ ...themes, isLightTheme: !themes.isLightTheme });
  }

  return (
    <>
      <ThemeContext.Provider value={themes}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeContextProvider;

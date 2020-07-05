import React, { createContext } from 'react';
import { Themes } from '../types';

const themes: Themes = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

export const ThemeContext = createContext(themes);

const ThemeContextProvider: React.FC = (props) => {
  return (
    <>
      <ThemeContext.Provider value={themes}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeContextProvider;

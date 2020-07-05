import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
};

export default App;

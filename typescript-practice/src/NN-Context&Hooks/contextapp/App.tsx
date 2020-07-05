import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
};

export default App;

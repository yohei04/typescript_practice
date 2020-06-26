import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>test</Provider>
    </BrowserRouter>
  );
};

export default App;

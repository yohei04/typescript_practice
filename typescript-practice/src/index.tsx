import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './hypertextcandy-Todo/components/todo/Todo';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import { StoreProvider } from './Udemy/redux/store';
// import { Router, RouteComponentProps } from '@reach/router';
// import HomePage from './Udemy/components/HomePage';
// import FavPage from './Udemy/components/FavPage';

// const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent

// ReactDOM.render(
//   <StoreProvider>
//     <Router>
//       <App path="/">
//         <RouterPage pageComponent={<HomePage />} path="/" />
//         <RouterPage pageComponent={<FavPage />} path="/faves" />
//       </App>
//     </Router>
//   </StoreProvider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

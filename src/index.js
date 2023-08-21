import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { getA, addItem, removeItem } from './myStore';

// const a = getA();
// console.log(a);

// addItem('name', 'ravi');

// console.log(getA());
// removeItem('name')
// console.log(getA());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



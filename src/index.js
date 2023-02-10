import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ExcelContext from './components/Context/ExcelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ExcelContext>
     <App /> 
  </ExcelContext>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import './index.scss';
import App from './App';
import 'macro-css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);



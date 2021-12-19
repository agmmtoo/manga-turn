import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <h1 className="font-semibold uppercase my-1"><a href="/">Manga Turn</a></h1>
        <nav><a href="/about">About</a></nav>
      </header>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

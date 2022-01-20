import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="flex flex-col">
        <h1 className="font-semibold uppercase py-6 text-3xl mx-auto"><Link to="/">Manga Turn</Link></h1>
        <nav className="flex flex-row pb-3 justify-around text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="flex flex-col">
        <h1 className="font-bold uppercase py-6 text-3xl mx-auto"><Link to="/">Manga <span className="text-indigo-800 dark:text-indigo-400">Turn</span></Link></h1>
        <nav className="flex flex-row pb-3 justify-around text-xl font-semibold">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
      </header>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

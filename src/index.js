import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './components/Landing/index.js';
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from './components/SinglePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
          </Routes>
        </BrowserRouter>
  );

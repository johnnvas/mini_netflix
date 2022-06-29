import React from "react";
import Landing from './components/Landing';
import MoviePage from './components/SinglePage/index.js';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;

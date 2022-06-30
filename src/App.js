import React, {useState} from "react";
import Landing from "./components/Landing";
import MoviePage from "./components/SinglePage/index.js";

import "./App.css";
import { MoviesListContext } from "./context/MoviesListContext";


function App() {

  const [seenMovies, setSeenMovies] = useState(['test']);

  return (
    <div className="App">
      <MoviesListContext.Provider value={{seenMovies, setSeenMovies}}>
        <Landing />
        <MoviePage />
      </MoviesListContext.Provider>
    </div>
  );
}

export default App;

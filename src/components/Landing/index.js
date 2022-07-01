import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesListContext } from "../../context/MoviesListContext";
import "../css/index.css";

const Landing = () => {
  const seenMovies = useContext(MoviesListContext);
  console.log(seenMovies, "THIS IS THE MOVIE CONTEXT");

  const movieIds = [
    "tt0088763",
    "tt0082971",
    "tt0499549",
    "tt0816692",
    "tt4003440",
  ];

  return (
    <div className="big_container">
      <h1 className='landing_title'>MINIFLIX</h1>
      <div className="movie_card_container">
        <Link
          className="card"
          to={`/movie/${movieIds[0]}`}
          state={{ }}
        >
          <img
            src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            alt="poster_img"
            className="poster_img"
          ></img>
        </Link>
        <Link
          className="card"
          to={`/movie/${movieIds[1]}`}
          state={{  }}
        >
          <img
            src="https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg"
            alt="poster_img"
            className="poster_img"
          ></img>
        </Link>
        <Link
          className="card"
          to={`/movie/${movieIds[2]}`}
          state={{ from: "the-page-id" }}
        >
          <img
            src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
            alt="poster_img"
            className="poster_img"
          ></img>
        </Link>
        <Link
          className="card"
          to={`/movie/${movieIds[3]}`}
          state={{ from: "the-page-id" }}
        >
          <img
            src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            alt="poster_img"
            className="poster_img"
          ></img>
        </Link>
        <Link
          className="card"
          to={`/movie/${movieIds[4]}`}
          state={{ from: "the-page-id" }}
        >
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDQ4Y2E5ODktODI5ZS00ZGVkLTgyZTEtNWY1ZjNiZTFjOTE3XkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_SX300.jpg"
            alt="poster_img"
            className="poster_img"
          ></img>
        </Link>
      </div>
    </div>
  );
};
export default Landing;

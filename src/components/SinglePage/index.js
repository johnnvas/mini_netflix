import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useLocation, Link } from "react-router-dom";
import { MoviesListContext } from "../../context/MoviesListContext";
import "./SingleMovie.css";

const MoviePage = () => {
  const seenMovies = useContext(MoviesListContext);
  console.log(seenMovies, "THIS IS THE MOVIE CONTEXT");
  //Set movieData state
  const [movieData, setMovieData] = useState({});

  //Get the movie id from the url
  const { movieId } = useParams();
  console.log(movieId, "THIS IS THE MOVIE ARRID@@@@RR");

  // const testArr = [];
  // const testObj = {test : location}
  // const testObj2 = { test2: location }
  // testArr.push(testObj);
  // console.log(testObj, "THIS IS THE MOVIE ID");
  // testArr.push(testObj2);
  // console.log(testArr, "THIS IS THE MOVIE ARRRR");

  //Lets get the movie data from the API when the page renders
  useEffect(() => {
    if (!seenMovies.includes(movieId)) {
      const apiCall = async () => {
        const res = await axios(
          `http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=97c51ac2`
        );
        const data = res.data;
        setMovieData(data);
        seenMovies.push({movieId, data});
        // console.log(
          //   data,
          //   data.Title,
          //   data.Plot,
          //   data.imdbRating,
          //   "HERE IS THE MOVIE DATA"
          // );
        }
        apiCall();
        console.log("THIS ONLY HAPPENS INSIDE");
    } else {
      console.log(seenMovies, "OUTSIDE");
      setMovieData(seenMovies.find(movie => movie.movieId === movieId).data);
    }
    console.log(seenMovies, "OUTSIDEEEEE")
  }, [movieId, seenMovies]);

  return (
    <div className="big_container">
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt="poster_img"></img>
      <p>{movieData.Plot}</p>
      <p>IMDB: {movieData.imdbRating}</p>
      <Link
       to={`/`}
          state={{seenMovies}}>
        <button>Back</button>
      </Link>
    </div>
  );
};
export default MoviePage;

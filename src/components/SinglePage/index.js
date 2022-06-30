import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useLocation, Link } from "react-router-dom";
import { MoviesListContext } from "../../context/MoviesListContext";
import "./SingleMovie.css";

const MoviePage = () => {
  const seenMovies = useContext(MoviesListContext);
  console.log(seenMovies, "THIS IS THE MOVIE CONTEXT");
  //Set movieData state
  const [movieData, setMovieData] = useState([]);

  //Get the movie id from the url
  const { movieId } = useParams();


  //Lets get the movie data from the API when the page renders
  useEffect(() => {
    let id = [];

    //Get the movieID from the seenMovies array
    for (let key in seenMovies) {
      id.push(seenMovies[key].imdbID);
    }

    //If the movieId is NOT in the id array, then we need to call the API
    if (!id.includes(movieId)) {
      const apiCall = async () => {
        const res = await axios(
          `http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=97c51ac2`
        );
        const data = res.data;
        setMovieData(data);
        seenMovies.push(data);
        }
        apiCall();
        console.log("THIS ONLY HAPPENS INSIDE");
    }

    //Else populate the page with data from the context/ NO API call
    else {
      for (let key in seenMovies) {
        if (seenMovies[key].imdbID === movieId) {
          setMovieData(seenMovies[key]);
        }
    }
    }
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

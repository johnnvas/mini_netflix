import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SingleMovie.css';
// import { Link } from "react-router-dom";

const MoviePage = () => {
  // const movieHolder = [];
  // const
  const { movieId } = useParams();
  console.log(movieId, 'HERE IS THE MOVIE ID');

  const apiCall = async () => {
    const res = await axios(`http://www.omdbapi.com/?i=${movieId}&apikey=97c51ac2`);
    const data = res.data;
    console.log(data, data.Title, data.Plot, data.imdbRating, 'HERE IS THE MOVIE DATA');
  }

  apiCall();

  return (
    <div className='big_container'>
      <h1>8</h1>
      <img src= "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg" alt='poster_img'></img>
    </div>
  )
}
export default MoviePage;

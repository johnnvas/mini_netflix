import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
  return (
    <div className='big_container'>
      <h1>Landing</h1>
      <div className='movie_card_container'>
        <Link className='movie_card1 card'
        to={`/movie`}
            style={{ textDecoration: "none" }}
            name=''
            >
              BACK TO THE FUTURE</Link>
        <Link className='movie_card2 card'
        to={`/movie`}
            style={{ textDecoration: "none" }}
            name=''
            >
              INDIANA JONES AND THE RAIDERS OF THE LOST ARK</Link>
        <Link className='movie_card3 card'
        to={`/movie`}
            style={{ textDecoration: "none" }}
            name=''
            >
              AVATAR</Link>
        <Link className='movie_card4 card'
        to={`/movie`}
            style={{ textDecoration: "none" }}
            name=''
            >
              INTERSTELLAR</Link>
        <Link className='movie_card5 card'
        to={`/movie`}
            style={{ textDecoration: "none" }}
            name=''
            >
              THE HOUSE THAT JACK BUILT</Link>
      </div>
    </div>
  )
}
export default Landing;

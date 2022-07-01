import { createContext, useContext, useState } from "react";


export const MoviesListContext = createContext([]);


// export function MoviesListContextProvider({ props }) {
//   const [seenMovies, setSeenMovies] = useState([])



//   // const value = {
//   //   seenMovies
//   // }


//   return moviesListContext = createContext([seenMovies, setSeenMovies]);

// }

// export function useMoviesListContext() {
//   return useContext(moviesListContext);
// }

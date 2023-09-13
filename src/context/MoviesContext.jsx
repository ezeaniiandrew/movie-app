import { createContext, useState, useEffect, useContext } from "react";
import { init } from "../api/movieDb.jsx";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await init();
      setMovies(data);
    };

    fetchData();
  }, []);
  const value = { movies, setMovies };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export const useMoviesContext = () => useContext(MoviesContext);

export default MoviesProvider;

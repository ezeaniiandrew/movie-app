import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import c from "./movie-list.module.css";
import { init } from "../../api/movieDb.jsx";
import { useMoviesContext } from "../../context/MoviesContext"

function MovieList() {
  const { movies } = useMoviesContext()
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await init(
  //       "https://api.themoviedb.org/3/movie/popular",
  //       "f809d7185163d1cee3d325b3d6ad6834"
  //     );
  //     setMovies(data);
  //   };

  //   fetchData();
  // }, []);

  if (!movies) {
    return <p>No movies Found</p>;
  }

  return (
    <section id="featured-movies" className={c.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;

import { useEffect, useState } from "react";
import MovieRating from "../MovieRating/MovieRating";
import c from "./movie-card.module.css";
import { getSingleMovieDetails } from "../../api/movieDb.jsx";
import Heart from "../Heart/Heart"

function MovieCard({ movie }) {
  const [genres, setGenres] = useState([]);
  const [isFavourite, setIsfavourite] = useState(false)
  
  useEffect(() => {
    const getGenres = async () => {
      const gen = await getSingleMovieDetails(
        movie.id,
        "f809d7185163d1cee3d325b3d6ad6834"
      );
      setGenres(gen)
    };
    getGenres();
  }, []);
  
  return (
    <div className={c.container}>
    <Heart handleClick={() => setIsfavourite(!isFavourite)} isFavourite={isFavourite} />
      <div style={{position: "relative", overflow: "hidden"}}>
        <img src={movie.posterUrl} alt="movie poster" />
        <div className={c.backdrop}></div>
      </div>
      <div className={c.textbox}>
        <p className={c.releaseDate}>{movie.releaseDate}</p>
        <h3>{movie.title}</h3>
        <MovieRating rating={movie.rating} />
        <p className={c.genres}>{genres.map((genre) => genre.name + " ")}</p>
      </div>
    </div>
  );
}

export default MovieCard;

import Poster from "../assets/Poster.png";
import MovieRating from "./MovieRating/MovieRating";
import c from "./banner.module.css";

function Banner({ movie }) {
  return (
    <div
      style={{
        backgroundImage: `url(${movie.posterUrl})`,
        height: "600px",
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={c.textBox}>
        <h2>{movie.title}</h2>
        <MovieRating rating={movie.rating} />
        <p className={c.movieInfo}>{movie.tagline}</p>
        <button>Watch trailer</button>
      </div>
      <div className={c.backdrop}></div>
    </div>
  );
}

export default Banner;

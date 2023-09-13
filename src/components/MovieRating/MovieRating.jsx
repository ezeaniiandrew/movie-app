import c from "./movie-rating.module.css";
import imdbLogo from "../../assets/imdb-logo.png";
import rottenTomatoesLogo from "../../assets/rotten-tomatoes-logo.png";

function MovieRating({ rating }) {
  return (
    <div className={c.ratingBox}>
      <div className={c.box}>
        <div className={c.imgBox}>
          <img src={imdbLogo} alt="imdb logo" />
        </div>

        <p className={c.rating}>{rating * 10}/100</p>
      </div>
      <div className={c.box}>
        <div className={c.imgBox}>
          <img src={rottenTomatoesLogo} alt="imdb logo" />
        </div>
        <p className={c.rating}>{Math.round((rating / 10) * 100) + "%"}</p>
      </div>
    </div>
  );
}

export default MovieRating;

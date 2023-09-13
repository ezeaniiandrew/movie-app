import Header from "../../components/header/Header";
import MovieList from "../../components/MovieList/MovieList";
import c from "./home.module.css"
import MoviesProvider from "../../context/MoviesContext"

function Home() {
  return (
    <MoviesProvider>
      <Header />
      <section className={c.movieSection}>
      <MovieList />
      </section>
      
    </MoviesProvider>
  );
}

export default Home;

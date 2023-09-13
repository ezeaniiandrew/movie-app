import c from "./input.module.css";
import { useState } from "react";
import { searchMovies } from "../../api/movieDb.jsx";
import { useMoviesContext } from "../../context/MoviesContext";

function SearchInput() {
  const { setMovies } = useMoviesContext();
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setText("");
    const movies = await searchMovies(text);

    setMovies(movies);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={c.input}
      />
    </form>
  );
}

export default SearchInput;

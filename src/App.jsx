import { useEffect } from "react";
import { getTopRatedMovies } from "./api/movieDb";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    getTopRatedMovies();
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;

import { useEffect, useState } from "react"
import Banner from "../Banner";
import Navbar from "../navbar/Navbar";
import c from "./header.module.css"
import { getHeroMovie } from "../../api/movieDb.jsx"

function Header() {
  const [heroMovie, setHeroMovie] = useState([])
  
  useEffect(() => {
    const getTopHeroMovie = async () => {
    const heroMovie = await getHeroMovie()
    
    setHeroMovie(heroMovie)
    }
    
    getTopHeroMovie()
  }, [])
  
  return (
    <div className={c.container}>
      <Navbar />
      <Banner movie={heroMovie} />
    </div>
  );
}

export default Header;

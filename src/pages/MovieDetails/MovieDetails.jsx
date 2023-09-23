import c from "./movie-details.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent"

function MovieDetails() {
  return (
    <section className={c.container}>
      
        <Sidebar />
  <MainContent />
    </section>
  );
}

export default MovieDetails;

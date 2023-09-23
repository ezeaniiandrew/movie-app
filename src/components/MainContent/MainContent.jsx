import c from "./main-content.module.css";
import holder from "../../assets/ph_113937.png";

function MainContent() {
  return (
    <section className={c.mainContent}>
      <div className={c.trailer}>
        <img src={holder} alt="" />
      </div>
    </section>
  );
}

export default MainContent;

import c from "./sidebar.module.css";
import logo from "../../assets/tv.png";
import homeIcon from "../../assets/Home.svg";
import calendarIcon from "../../assets/Calendar.svg";
import tvIcon from "../../assets/TV Show.svg";
import projectorIcon from "../../assets/Movie Projector.svg";
import logoutIcon from "../../assets/Logout.svg";

function Sidebar() {
  return (
    <section className={c.sidebar}>
      <div className={c.logoBox}>
        <div>
          <img src={logo} alt="company logo" />
        </div>
        <p>MovieBox</p>
      </div>

      <ul className={c.nav}>
        <li className={c.navItem}>
          <img src={homeIcon} alt="" />
          <p>Home</p>
        </li>
        <li className={c.navItem}>
          {" "}
          <img src={projectorIcon} alt="" />
          <p>Movies</p>
        </li>
        <li className={c.navItem}>
          {" "}
          <img src={tvIcon} alt="" />
          <p>Tv Series</p>
        </li>
        <li className={c.navItem}>
          {" "}
          <img src={calendarIcon} alt="" />
          <p>Upcoming</p>
        </li>
      </ul>
      <div className={c.card}>
        <p className={c.bigText}>Play movie quizzes and earn free tickets</p>
        <p className={c.smallText}>50k people are playing now</p>
        <button className={c.btn}>Start playing</button>
      </div>
      <button className={c.logout}>
        {" "}
        <img src={logoutIcon} alt="" />
        <p>Log out</p>
      </button>
    </section>
  );
}

export default Sidebar;

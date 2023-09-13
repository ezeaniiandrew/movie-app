import SearchInput from "../UI/SearchInput";
import c from "./navbar.module.css";
import logo from "../../assets/tv.png";
import menuIcon from "../../assets/Menu.png";


function Navbar() {
  

  return (
    <nav className={c.nav}>
      <div className={c.logoBox}>
        <div>
          <img src={logo} alt="company logo" />
        </div>
        <p>MovieBox</p>
      </div>
        <SearchInput />
      
      <div className={c.logoBox}>
        <p>Sign In</p>
       <div>
        <img src={menuIcon} alt="menu" />
       </div>
      </div>
    </nav>
  );
}

export default Navbar;

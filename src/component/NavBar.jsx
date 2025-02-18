import "../styles/NavBar.css";
import dsLogo from "../assets/ds3_logo.jpg";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar-card">
      <div id="navbar-logo">
        <Link to="/" >
          <img src={dsLogo} alt="Dark Souls Title Logo" />
        </Link>
      </div>

      <nav id="navbar">
        <div className="dropdown">
          <button className="dropbtn">World</button>
          <div className="dropdown-content">
            <Link>Placeholder</Link>
            <Link>Placeholder</Link>

          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Placeholder</button>
          <div className="dropdown-content">
          <Link>Placeholder</Link>
          <Link>Placeholder</Link>

          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Equipment</button>
          <div className="dropdown-content">
          <Link>Placeholder</Link>
          <Link>Placeholder</Link>

          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Magic</button>
          <div className="dropdown-content">
            <Link to="/SorceryList">Sorcery</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Items</button>
          <div className="dropdown-content">
          <Link>Placeholder</Link>
          <Link>Placeholder</Link>

          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default NavBar;

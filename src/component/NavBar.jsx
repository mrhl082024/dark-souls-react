import "../styles/NavBar.css";
import dsLogo from "/images/ds3_logo.jpg";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="card">
      <section>
        <div id="navbar-logo">
          <Link to="/">
            <img src={dsLogo} alt="Dark Souls Title Logo" />
          </Link>
        </div>
      </section>

      <nav id="navbar">
        <section>
          <div className="dropdown">
            <button className="dropbtn">&#9776; World</button>
            <div className="dropdown-content">
              <Link>Placeholder</Link>
              <Link>Placeholder</Link>
            </div>
          </div>
        </section>

        <div className="dropdown">
          <button className="dropbtn">&#9776; Placeholder</button>
          <div className="dropdown-content">
            <Link>Placeholder</Link>
            <Link>Placeholder</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">&#9776; Equipment</button>
          <div className="dropdown-content">
            <Link>Placeholder</Link>
            <Link>Placeholder</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">&#9776; Magic</button>
          <div className="dropdown-content">
            <Link to="/SorceryList">Sorcery</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">&#9776; Items</button>
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

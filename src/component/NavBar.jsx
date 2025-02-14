import "../styles/NavBar.css";
import dsLogo from  "../assets/ds3_logo.jpg"

const NavBar = () => {
  return (
    <div id="navbar-card">
      <img id="navbar-logo" src={dsLogo} alt="Dark Souls Title Logo" />
      <nav id="navbar">
        <div className="dropdown">
          <button className="dropbtn">World</button>
          <div className="dropdown-content">
            <a href="">Placeholder</a>
            <a href="">Placeholder</a>
            <a href="">Placeholder</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Placeholder</button>
          <div className="dropdown-content">
            <a href="">Placeholder</a>
            <a href="">Placeholder</a>
            <a href="">Placeholder</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Equipment</button>
          <div className="dropdown-content">
            <a href="">Armour</a>
            <a href="">Weapons</a>
            <a href="">Catalysts</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Magic</button>
          <div className="dropdown-content">
            <a href="">Sorcery</a>
            <a href="">Miracles</a>
            <a href="">Pyromancy</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Items</button>
          <div className="dropdown-content">
            <a href="">Placeholder</a>
            <a href="">Placeholder</a>
            <a href="">Placeholder</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

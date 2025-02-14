import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar-card">
      <nav id="navbar">
        <div class="dropdown">
          <button class="dropbtn">Magic</button>
          <div class="dropdown-content">
            <a href="">Sorcery</a>
            <a href="">Miracles</a>
            <a href="">Pyromancy</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Magic</button>
          <div class="dropdown-content">
            <a href="">Sorcery</a>
            <a href="">Miracles</a>
            <a href="">Pyromancy</a>
          </div>
        </div>
        
      </nav>
    </div>
  );
};
export default NavBar;

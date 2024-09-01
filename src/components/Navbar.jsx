import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-logo"><img src="./logo.png"></img></div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul class="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

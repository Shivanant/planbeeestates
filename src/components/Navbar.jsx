import React, { useRef } from 'react';
import '../css/Navbar.css';
import { useLocation, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navCheckRef = useRef();
  const currentLocation = useLocation(); // Renaming the variable
  const navigate = useNavigate();

  const handleLogoClick=()=>{
       navigate('/')
  }

  const handleNavItemClick = () => {
    // Uncheck the checkbox to close the menu
    if (navCheckRef.current) {
      navCheckRef.current.checked = false;
    }
  };

   // You can define styles for different routes
   const getNavbarStyle = () => {
    switch (currentLocation.pathname) {
      case '/privacy':
        return { backgroundColor: "#1A237E" };
      case '/terms-condition':
        return { backgroundColor: "#1A237E" };
      case '/contact':
        return { backgroundColor: 'red' };
      default:
        return {  };
    }
  };

  return (
    <nav className="nav" style={getNavbarStyle()}>
      <input type="checkbox" id="nav-check" ref={navCheckRef} />
      <div className="nav-header" >
        <div className="nav-logo" onClick={handleLogoClick}>
          {/* <img src="./pblogo.png" alt="logo" />  */}
          <h3>PlanBeeEstate</h3>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul className="nav-list">
        <li>
          <a href="./" onClick={handleNavItemClick}>Home</a>
        </li>
        <li>
          <a href="#Projects" onClick={handleNavItemClick}>Projects</a>
        </li>
        <li>
          <a href="#About" onClick={handleNavItemClick}>About</a>
        </li>
        <li>
          <a href="#ContactUs" onClick={handleNavItemClick}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

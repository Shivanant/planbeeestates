import React, { useRef, useState } from 'react';
import '../css/Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navCheckRef = useRef();
  const currentLocation = useLocation();
  const navigate = useNavigate();
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavItemClick = (path, hash = '') => {
    navigate(`${path}${hash}`, { replace: true });

    if (navCheckRef.current) {
      navCheckRef.current.checked = false;
    }
    setDropdownOpen(false)
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getNavbarStyle = () => {
    switch (currentLocation.pathname) {
      case '/privacy':
      case '/terms-condition':
        return { backgroundColor: '#1A237E' };
      case '/contact':
        return { backgroundColor: 'red' };
      default:
        return {};
    }
  };

  return (
    <nav className="nav" style={getNavbarStyle()}>
      <input type="checkbox" id="nav-check" ref={navCheckRef} />
      <div className="nav-header">
        <div className="nav-logo" onClick={handleLogoClick}>
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
          <a onClick={() => handleNavItemClick('/', '#Home')}>
            Home
          </a>
        </li>
        <li className="dropdown">
          <a onClick={toggleDropdown}>
            Projects
          </a>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <li onClick={() => handleNavItemClick('/residential')}>
                Residential
              </li>
              <li onClick={() => handleNavItemClick('/comercial')}>
                Commercial
              </li>
            </div>
          )}
        </li>
        <li>
          <a onClick={() => handleNavItemClick('/', '#About')}>
            About
          </a>
        </li>
        <li>
          <a onClick={() => handleNavItemClick('/', '#ContactUs')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

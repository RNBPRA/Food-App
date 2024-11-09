import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="FoodieFind Logo" className="logo-img" />
          <span className="logo-text">FoodieFind</span>
        </div>

        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="navbar-item-text">Home</span>
          </Link>
          <Link to="/menu" className="navbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 16c1-1 2-3.15 2-5a6 6 0 0 0-6-6c-1.85 0-4 1-5 2"></path>
              <path d="M12 19c-3 0-4.99-1.34-6-2"></path>
              <path d="M3 10a7 7 0 0 1 7-7"></path>
              <path d="M7 17a7 7 0 0 1-4-7"></path>
              <circle cx="15" cy="10" r="2"></circle>
            </svg>
            <span className="navbar-item-text">Menu</span>
          </Link>
          <Link to="/orders" className="navbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="navbar-item-text">Orders</span>
          </Link>
          <Link to="/profile" className="navbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="navbar-item-text">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
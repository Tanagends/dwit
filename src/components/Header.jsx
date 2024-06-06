import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contacts">DWTweb&graphic</Link></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="/path/to/logo.png" alt="DWIT Logo" />
      </div>
    </header>
  );
};

export default Header;


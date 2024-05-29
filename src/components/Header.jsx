import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="/path/to/logo.png" alt="DWIT Logo" />
      </div>
    </header>
  );
};

export default Header;


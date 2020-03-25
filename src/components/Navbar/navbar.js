import React from 'react';
import './navbar.scss';
import { Link } from '@reach/router';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div>
          <a>Logo</a>
        </div>
        <ul>
          <li>
            <a>About me</a>
          </li>
          <li></li>
          <li>
            <a>contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

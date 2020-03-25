import React from 'react';
import './navbar.scss';
import { Link } from '@reach/router';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div>
          <a>Room Sofas</a>
        </div>
        <div>
          <ul>
            <li></li>
            <li>
              <a>Recliners</a>
            </li>
            <li>
              <a>Sectionals</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Account</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/key_logo.png';
import '../assets/TopBar.css';

function TopBar () {

  return (
    <div className = "topbar-container">
      <nav className = "navigation">
        <Link to = "/" className = "logo">
          <img src = { logo } width = {75}></img>
        </Link>
        <ul className = "nav-buttons">
          <li className = "nav-item">
            <Link to = "/login">
              Login
            </Link>
          </li>
          <li className = "nav-item">
            <Link to = "/signup">
              Sign up
            </Link>
          </li>  
        </ul>
      </nav>
    </div>
  )
}

export default TopBar;
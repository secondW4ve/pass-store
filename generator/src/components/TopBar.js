import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/key_logo.png';
import './TopBar.css';

function TopBar () {

  return (
    <div className = "topbar-container">
      <nav className = "navigation">
        <Link to = "/" className = "logo">
          <img src = { logo } width = {50}></img>
        </Link>
        <div className = "title-navs">
          <h1 className = "title">Your private password storage!</h1>
          <ul className = "nav-buttons">
            <li className = "nav-item">
              <Link 
                to = "/login"
                className = "nav-link"
              >
                Login
              </Link>
            </li>
            <li className = "nav-item">
              <Link 
                to = "/signup"
                className = "nav-link"
              >
                Sign up
              </Link>
            </li>  
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default TopBar;
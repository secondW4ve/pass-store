import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../assets/key_logo.png';
import './TopBar.css';

function TopBar (props) {

  const onClickLogout = () => {
    const action = {
      type: 'logout-success',
    }
    props.dispatch(action);
  }

  const links = (
    <div>
      {props.user.isLoggedIn ? 
        <ul className = "nav-buttons">
          <li className = "nav-item">
            <Link 
              to = "/user"
              className = "nav-link"
            >
              My storage
            </Link>
          </li> 
          <li className = "nav-item">
            <Link 
              to = "/"
              onClick = {onClickLogout}
              className = "nav-link"
            >
              Logout
            </Link>
          </li>
        </ul>
        :
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
      }
    </div>
  );

  return (
    <div className = "topbar-container">
      <nav className = "navigation">
        <Link to = "/" className = "logo">
          <img alt = "PS" src = { logo } width = {50}></img>
        </Link>
        <div className = "title-navs">
          <h1 className = "title">Your private password storage!</h1>
          {links}
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state,
  }
}

export default connect(mapStateToProps)(TopBar);
import React from 'react';

import './LoginPage.css';

function LoginPage () {

  return(
    <div className = "login-container">
      <div className = "login-input-form">
        <input 
          placeholder = "username"
          className = "input-field"
        />
        <input 
          type = "password" 
          placeholder = "password"
          className = "input-field"
        />
        <button
          className = "login-btn"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage;
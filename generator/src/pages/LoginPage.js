import React, { useEffect, useState } from 'react';

import Input from '../components/Input';
import './LoginPage.css';

function LoginPage () {

  return(
    <div className = "login-container">
      <div className = "login-input-form">
        <Input 
          placeholder = "username"
          className = "input-field"
        />
        <Input 
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
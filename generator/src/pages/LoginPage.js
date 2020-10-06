import React, { useState } from 'react';

import Input from '../components/Input';
import ButtonWithSpinner from "../components/ButtonWithSpinner";
import './LoginPage.css';

function LoginPage () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pendingApiCall, setPendingApiCall] = useState(false);

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  } 

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  const onClickLogin = () => {
    const body = {
      username: username,
      password: password,
    };

    setPendingApiCall(true);
    
  }

  return(
    <div className = "login-container">
      <div className = "login-input-form">
        <Input 
          placeholder = "username"
          value = {username}
          onChange = {onChangeUsername}
        />
        <Input 
          type = "password" 
          placeholder = "password"
          value = {password}
          onChange = {onChangePassword}
        />
        <ButtonWithSpinner
          label = "Login"
          disabled = {pendingApiCall}
          spinnerStatus = {pendingApiCall}
          onClick = {onClickLogin}
        />
      </div>
    </div>
  )
}

export default LoginPage;
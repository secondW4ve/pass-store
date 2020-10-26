import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import ButtonWithSpinner from "../components/ButtonWithSpinner";
import './LoginPage.css';
import * as authAction from '../redux/authActions';

function LoginPage (props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [errorUsername, setErrorUsername] = useState(undefined);
  const [errorPassword, setErrorPassword] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if(username !== '' && errorUsername !== undefined){
      setErrorUsername(undefined);
    }
  },[username]);


  useEffect(() => {
    if(password !== '' && errorPassword !== undefined){
      setErrorPassword(undefined);
    }
  },[password]);

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  } 

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  const onClickLogin = () => {
    setError(undefined);
    if (!areFieldsFilled()){
      return;
    }
    const body = {
      username: username,
      password: password,
    };
    setPendingApiCall(true);
    props.actions.postLogin(body).then(response => {
      setPendingApiCall(false);
      props.history.push('/user');
    }).catch(error => {
      setError(error.response.data.message);
      setPendingApiCall(false);
    })
  }

  const areFieldsFilled = () => {
    let result = true;
    if(username === ''){
      setErrorUsername("Enter username please");
      result = false;
    }
    if(password === ''){
      setErrorPassword('Enter password please');
      result = false;
    }
    return result;
  }

  return(
    <div className = "login-container">
      <div className = "login-input-form">
        <Input 
          placeholder = "username"
          value = {username}
          hasError = {errorUsername && true}
          error = {errorUsername}
          onChange = {onChangeUsername}
          disabled = {pendingApiCall}
        />
        <Input 
          type = "password" 
          placeholder = "password"
          value = {password}
          onChange = {onChangePassword}
          hasError = {errorPassword && true}
          error = {errorPassword}
          disabled = {pendingApiCall}
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

const mapDispatchToProps = (dispatch) => {
  return{
    actions: {
      postLogin: (user) => dispatch(authAction.loginHandler(user)),
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
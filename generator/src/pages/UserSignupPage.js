import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import ButtonWithSpinner from '../components/ButtonWithSpinner';
import * as authAction from '../redux/authActions';
import './UserSignupPage.css';

function UserSignupPage (props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [pendingApiCall, setPendingApiCall] = useState(false);

  const onChangeUsername = (e) => { 
    if(errors.username !== ''){
      const errorsObj = {...errors};
      errorsObj.username = '';
      setErrors(errorsObj)
    }
    const value = e.target.value;
    setUsername(value);
  }

  const onChangePassword = (e) => {
    if(errors.password !== ''){
      const errorsObj = {...errors};
      errorsObj.password = '';
      setErrors(errorsObj)
    }
    comparePasswords();
    const value = e.target.value;
    setPassword(value);
  }

  const onChangeRepeatedPassword = (e) => {
    const value = e.target.value;
    setRepeatedPassword(value);
    comparePasswords(value);
  }

  const comparePasswords = (value = repeatedPassword) => {
    const doPasswordsMatch = password === value;
    const errorsObj = {...errors};
    errorsObj.repeatedPassword = doPasswordsMatch ? '' : `Passwords don't match`;
    setErrors(errorsObj);
  }

  const onClickSignup = () => {
    const user = {
      username: username,
      password: password
    };
    setPendingApiCall(true);
    props.actions.postSignup(user).then(response => {
      setPendingApiCall(false);
      props.history.push('/user');
    }).catch(apiError => {
      let errorsObj = {...errors};
      if (apiError.response.data && apiError.response.data.validationErrors){
        errorsObj = {...apiError.response.data.validationErrors};
      }
      setErrors(errorsObj);
      setPendingApiCall(false);
    })
  }

  return(
    <div className = "signup-container">
      <div className = "signup-form">
        <Input
          placeholder = "username"
          value = {username}
          onChange = {onChangeUsername}
          hasError = {errors.username && true}
          error = {errors.username}
          disabled = {pendingApiCall}
        />
        <Input
          placeholder = "password"
          value = {password}
          type = "password"
          onChange = {onChangePassword}
          hasError = {errors.password && true}
          error = {errors.password}
          disabled = {pendingApiCall}
        />
        <Input
          placeholder = "repeat password"
          value = {repeatedPassword}
          type = "password"
          onChange = {onChangeRepeatedPassword}
          hasError = {errors.repeatedPassword && true}
          error = {errors.repeatedPassword}
          disabled = {pendingApiCall}
        />
        <ButtonWithSpinner
          label = "Sign up"
          onClick = {onClickSignup}
          disabled = {pendingApiCall}
          spinnerStatus = {pendingApiCall}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postSignup: (user) => dispatch(authAction.signupHandler(user)),
    }
  }
};

export default connect(null, mapDispatchToProps)(UserSignupPage);
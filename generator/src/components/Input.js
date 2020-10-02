import React from 'react';

import './Input.css';

function Input(props) {

  return(
    <div className = "input-container">
      <input
        type = {props.type === undefined ? 'text' : props.type} 
        placeholder = {props.placeholder}
        value = {props.value}
        onChange = {props.onChange}
        className = {props.hasError ? "input-field input-error" : "input-field"}
        disabled = {props.disabled}
      />
      <span className = "error-label">
        {props.hasError ? props.error : ''}
      </span>
    </div>
    
  )
}

export default Input;
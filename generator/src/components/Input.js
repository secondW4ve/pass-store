import React, {useEffect, useState} from 'react';

import './Input.css';

function Input(props) {

  return(
    <div className = "input-container">
      <input
        type = {props.type === undefined ? 'text' : props.type} 
        placeholder = {props.placeholder}
        type = {props.type}
        className = {props.hasError ? "input-field input-error" : "input-field"}
      />
      {props.hasError && 
        <span className = "error-label">
          {props.error}
        </span>}
    </div>
    
  )
}

export default Input;
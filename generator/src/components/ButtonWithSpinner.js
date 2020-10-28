import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import './ButtonWithSpinner.css'

function ButtonWithSpinner(props) {

  return (
    <div className = "button-with-spinner-container">
      <button 
        className = "button-with-spinner"
        onClick = {props.onClick} 
        disabled = {props.disabled}
      >  
        {props.label}
      </button>
      <div className = "spinner-box">
        <ClipLoader
          className = "spinner"
          color = {'#060504'}
          loading = {props.spinnerStatus}
        />
      </div>
    </div>
  )
}

export default ButtonWithSpinner;
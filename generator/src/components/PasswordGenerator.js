import React, {useState} from 'react';
import {LOWERCASE_CHAR_CODES, 
  UPPERCASE_CHAR_CODES,
  NUMBER_CHAR_CODES,
  SYMBOL_CHAR_CODES,
} 
from '../shared/CharactersCodesArrays';
import './PasswordGenerator.css';
import copy from '../assets/copy_img.png';


function PasswordGenerator (props) {
  const [numberOfCharacters, setNumberOfCharacters] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('password');
  const [passwordClass, setPasswordClass] = useState("password-placeholder");

  const onRangeChange = (event) => {
    setNumberOfCharacters(event.target.value);
  }

  const generatePassword = () => {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (includeUppercase){
      charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    }  
    if (includeNumbers){
      charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    }
    if(includeSymbols){
      charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    }
    const passwordCharacters = [];
    for(let i = 0; i < numberOfCharacters; i++){
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    
    setGeneratedPassword(passwordCharacters.join(''));
  }

  return (
    <div className = "generator-container">
      <h2 className = "generator-title">Generate password!</h2>
      <h4 className = "password-display">
        <p className = {passwordClass}>{generatedPassword}</p>
        <img 
          src = {copy} 
          width = "5"
          alt = "cpy"
          className = "copy-img"
        />
      </h4>
      <div className = "form">
        <p>Number of characters</p>
        <div className = "character-amount-container">
          <input 
            type = "range" 
            min="1" 
            max="30" 
            value={numberOfCharacters}
            onChange = {onRangeChange}
          />
          <input 
            type = "number"
            min="1" 
            max="50" 
            value={numberOfCharacters}
            onChange = {onRangeChange}
            id="characterAmountNumber"  
            className = "number-input"
          />
        </div>
        <p for="includeUppercase">Include uppercase</p>
        <input 
          type = "checkbox" 
          id = "includeUppercase"
          value = {includeUppercase}
          onChange = {() => {
            const prevValue = includeUppercase;
            setIncludeUppercase(!prevValue);
          }}  
        />

        <p for="includeNumbers">Include numbers</p>
        <input 
          type = "checkbox" 
          id = "includeNumbers"
          value = {includeNumbers}
          onChange = {() => {
            const prevValue = includeNumbers;
            setIncludeNumbers(!prevValue);
          }}  
        />

        <p for="includeSymbols">Include symbols</p>
        <input 
          type = "checkbox" 
          id = "includeSymbols"
          value = {includeSymbols}
          onChange = {() => {
            const prevValue = includeSymbols;
            setIncludeSymbols(!prevValue);
          }}
        />

        <button 
          class = "btn" 
          onClick = {generatePassword}
        >
          Generate password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator;
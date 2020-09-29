import React, {useState} from 'react';

import {LOWERCASE_CHAR_CODES, 
  UPPERCASE_CHAR_CODES,
  NUMBER_CHAR_CODES,
  SYMBOL_CHAR_CODES,
} 
from '../shared/CharactersCodesArrays';

function GeneratorPage () {

  const [numberOfCharacters, setNumberOfCharacters] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('password');

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
    for(let i = 0; i <= numberOfCharacters; i++){
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    
    setGeneratedPassword(passwordCharacters.join(''));
  }

  return (
    <div className="generator-page">
      <div className = "generator-container">
        <h1 className = "title">Password generator</h1>
        <h3 id = "passwordDisplay" class = "password-display">{generatedPassword}</h3>
        <div className = "form">
          <p>Number of characters</p>
          <div>
            <input 
              type = "range" 
              min="1" 
              max="30" 
              value={numberOfCharacters}
              onChange = {onRangeChange}
              id="characterAmountRange"
            />
            <input 
              type = "number"
              min="1" 
              max="50" 
              value={numberOfCharacters}
              onChange = {onRangeChange}
              id="characterAmountNumber"  
              class = "number-input"
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
    </div>
  )
}

export default GeneratorPage;
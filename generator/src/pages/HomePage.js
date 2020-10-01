import React from 'react';

import './HomePage.css';
import PasswordGenerator from '../components/PasswordGenerator';

function HomePage () {

  return(
    <div className = "homepage-container">
      <PasswordGenerator/>
    </div>
  )
}

export default HomePage;
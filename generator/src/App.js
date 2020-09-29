import React, {useState} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserSignupPage from './pages/UserSignupPage';
import GeneratorPage from './pages/GeneratorPage';
import TopBar from './components/TopBar';

function App() {

  
  return (
    <div>
      <TopBar></TopBar>
      <div className = "container">
        <Switch>
          <Route exact path = "/" component = {HomePage}></Route>
          <Route path = "/login" component = {LoginPage}></Route>
          <Route path = "/signup" component = {UserSignupPage}></Route>
				  <Route path = "/generator" component = {GeneratorPage}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

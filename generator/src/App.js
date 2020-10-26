import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserSignupPage from './pages/UserSignupPage';
import GeneratorPage from './pages/GeneratorPage';
import TopBar from './components/TopBar';
import UserPage from './pages/UserPage';
import './App.css';

function App() {

  
  return (
    <div className = "page-container">
      <TopBar></TopBar>
      <div className = "content-container">
        <Switch>
          <Route exact path = "/" component = {HomePage}></Route>
          <Route path = "/login" component = {LoginPage}></Route>
          <Route path = "/signup" component = {UserSignupPage}></Route>
				  <Route path = "/generator" component = {GeneratorPage}></Route>
          <Route path = "/user" component = {UserPage}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

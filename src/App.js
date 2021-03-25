import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "./components/HeaderComponent";
import Home from "./components/HomePageComponent";
import Footer from "./components/FooterComponent";
import Rates from "./components/RatePageComp";
import './App.css';
import React from 'react';
import About from './components/AboutUsComponent';
import Accounts from './components/AccountsComp';
import Main from './components/MainComponent';

function App() {
  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
}

export default App;

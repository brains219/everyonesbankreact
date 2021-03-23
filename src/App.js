import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "./components/HeaderComponent";
import Home from "./components/HomePageComponent";
import Footer from "./components/FooterComponent";
import Rates from "./components/RatePageComp";
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Rates />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

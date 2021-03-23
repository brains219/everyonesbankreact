import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "./components/HeaderComponent";
import Home from "./components/HomePageComponent";
import Footer from "./components/FooterComponent";
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;

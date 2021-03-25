import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomePageComponent";
import Rates from "./RatePageComp";
import About from "./AboutUsComponent";
import Accounts from "./AccountsComp";
import Footer from "./FooterComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/personalaccounts">
                <Accounts />
              </Route>
              <Route exact path="/rates">
                <Rates />
              </Route>
              <Route exact path="/aboutus">
                <About />
              </Route>
            </Switch>
            <Footer />
          </Router>
        );
    }
}
 
export default Main;
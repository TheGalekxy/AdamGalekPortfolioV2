import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Experience from "./components/experience/experience";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/menu";
import PortfolioItem from "./components/portfolioItem/portfolioItem";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import './App.scss';

import { useState } from "react";


function App() {
  // creating a state for the header
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="app">
        {/* Passing the state into the header component */}
        <Header headerState={menuOpen} setHeaderState={setMenuOpen} />
        <Menu headerState={menuOpen} setHeaderState={setMenuOpen}/>
          <Switch>
            <Route exact path="/"> 
              <div className="sections">
                <Intro/>
                <Portfolio/>
                <Experience/>
                <Testimonials/>
                <Contact/>
                {/* <PortfolioItem name="adam"/> */}
              </div>
            </Route>
            <Route path="/portfolioItem/:id"> 
              <PortfolioItem/>
              {/* <PortfolioItem name="adam"/> */}
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

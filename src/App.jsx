import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Experience from "./components/experience/experience";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/menu";

import './App.scss';

import { useState } from "react";


function App() {
  // creating a state for the header
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* Passing the state into the header component */}
      <Header headerState={menuOpen} setHeaderState={setMenuOpen} />
      <Menu headerState={menuOpen} setHeaderState={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

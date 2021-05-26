import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Experience from "./components/experience/experience";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";



function App() {
  return (
    <div className="app">
      <Header/>
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

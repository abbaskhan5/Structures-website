import React from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Patner from "./component/Patner";
import Service from "./component/Services";
import Courses from "./component/Courses";
import OurTeam from "./component/OurTeam";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Portfolio from "./component/Portfolio";
import FooterCat from "./component/FooterCate";
import Sucess from "./component/Sucess";

function App() {
  return (
    <>
      <Nav />
      <div id="home">
        <Home />
      </div>
      <div id="partner">
        <Patner />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <Sucess/>
      <div id="team">
        <OurTeam />
      </div>
      <FooterCat/>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

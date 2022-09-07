import React from "react";

import { About, Contact, Header, RoadMap, Testimonial, Team, Sponsors } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Team />
      <RoadMap />
      <Testimonial />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default App;

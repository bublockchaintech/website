import React from "react";

import { About, Contact, Header, RoadMap, Testimonial, Team } from "./container";
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
      <Contact />
    </div>
  );
};

export default App;

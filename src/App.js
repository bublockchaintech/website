import React from "react";

import { About, Contact, Header, RoadMap, Testimonial, Team, Sponsors, Announcements } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = ({ from }) => {
  return (
    <div className="app">
      <Navbar from={from} />
      <Header />
      <About />
      <Team />
      <RoadMap />
      <Testimonial />
      <Sponsors />
      <Announcements />
      <Contact />
    </div>
  );
};

export default App;

import React from "react";
import { Navbar } from "../components";
import { Announcements } from "../container";

const AnnouncementsPage = ({from}) => {
  return (
    <div>
      <Navbar from={from} />
      <br/><br/><br/><br/>
      <Announcements/>
    </div>
  );
};

export default AnnouncementsPage;

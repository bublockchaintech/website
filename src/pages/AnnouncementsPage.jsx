import React from "react";
import { Navbar } from "../components";
import { Announcements } from "../container";

const AnnouncementsPage = ({from}) => {
  return (
    <div>
      <Navbar from={from} />
      <Announcements/>
    </div>
  );
};

export default AnnouncementsPage;

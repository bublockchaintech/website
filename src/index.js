import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AnnouncementsPage from "./pages/AnnouncementsPage";

import "./index.css";

const paginationArr = ["app","announcements"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App from={paginationArr[0]} />} />
      <Route path="duyurular" element={<AnnouncementsPage from={paginationArr[1]} />} />
    </Routes>
  </BrowserRouter>
);

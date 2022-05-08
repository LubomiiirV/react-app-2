import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Views/Home";
import About from "./Views/About";

const container = document.querySelector("app-layout");
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>

        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";

const container = document.querySelector("app-container");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

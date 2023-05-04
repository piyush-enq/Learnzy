import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  
    <App />
  
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

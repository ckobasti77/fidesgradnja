import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import ContextProvider from "./context/ContextProvider.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </ParallaxProvider>
  </React.StrictMode>
);

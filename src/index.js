import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import cursor provider
import CursorProvider from "./context/CursorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </React.StrictMode>
);

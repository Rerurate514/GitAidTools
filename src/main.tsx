import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import TestAPI from "./assets/components/InputTest";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <TestAPI />
  </React.StrictMode>
);

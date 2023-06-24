import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { OAuthRequest } from "./assets/components/OAuthEntryPoint";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OAuthRequest />
  </React.StrictMode>
);

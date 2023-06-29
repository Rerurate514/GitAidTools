import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { OAuthRequest } from "./assets/components/OAuthEntryPoint";
import { InputAddFile } from "./assets/components/InputStageFile";
import { CommitMsg } from "./assets/components/InputCommitMsg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
    </style>
    {/* <OAuthRequest /> */}
    <InputAddFile />
    <CommitMsg />
  </React.StrictMode>
);

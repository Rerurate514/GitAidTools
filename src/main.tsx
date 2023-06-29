import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { InputAddFile } from "./assets/components/InputStageFile";
import { CommitMsg } from "./assets/components/InputCommitMsg";
import { PushBranch } from "./assets/components/PushBranch";
import ExecuteCommandButton from "./assets/components/ExeuteCommandButton";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InputAddFile />
    <CommitMsg />
    <PushBranch />
    <ExecuteCommandButton />
  </React.StrictMode>
);
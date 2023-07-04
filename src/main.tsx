import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { InputAddFile } from "./assets/components/InputStageFile";
import { CommitMsg } from "./assets/components/InputCommitMsg";
import { PushBranch } from "./assets/components/PushBranch";
import ExecuteCommandButton from "./assets/components/ExeuteCommandButton";
import { CommandContextProvider } from "./assets/components/SaveCommandContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CommandContextProvider>
      <InputAddFile />
      <CommitMsg />
      <PushBranch />
      <ExecuteCommandButton />
    </CommandContextProvider>
  </React.StrictMode>
);
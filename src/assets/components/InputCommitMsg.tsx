import { invoke } from "@tauri-apps/api";
import React, { useState } from "react";

export const CommitMsg = () => {
    const [commitMsg, setCommitMsg] = useState("")

    async function git_commit_cmd() {
        await invoke("git_commit_cmd",{commitMsg})
    }

    return(
        <div>
            <form
            onSubmit={(e) => {
                e.preventDefault(),
                git_commit_cmd()
            }}>
                <input style={{width: '650px'}} onChange={(e) => {setCommitMsg(e.currentTarget.value)}} placeholder="Enter commit message"></input>
                <button type="submit" style={{marginLeft: '8px'}}></button>
            </form>
        </div>
    )
}
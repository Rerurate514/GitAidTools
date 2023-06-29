import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import "./componentsStyles.css";

export const CommitMsg = () => {
    const [commitMsg, setCommitMsg] = useState("")
    const [result, setResult] = useState("");

    async function git_commit_cmd() {
        console.log({commitMsg})
        setResult(await invoke("git_commit_cmd",{ msg : commitMsg }))
    }

    return(
        <div>
            <h3>２．ここにはコミットメッセージを入力してください。</h3>
            <div style={{display: 'inline'}}>
                <form
                onSubmit={(e) => {
                    e.preventDefault(),
                    git_commit_cmd()
                }}>
                    <input style={{width: '95%'}} onChange={(e) => {setCommitMsg(e.currentTarget.value)}} placeholder="Enter commit message"></input>
                </form>
            </div>
        </div>
    )
}
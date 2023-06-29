import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import ShowResultMsg from "./ShowResultMsg"

export const CommitMsg = () => {
    const [commitMsg, setCommitMsg] = useState("")
    const [result, setResult] = useState("");

    async function git_commit_cmd() {
        console.log({commitMsg})
        setResult(await invoke("git_commit_cmd",{ commitMsg }))
    }

    return(
        <div>
            <h3>２．ここにはコミットメッセージを入力してください。</h3>
            <div style={{display: 'flex'}}>
                <form
                onSubmit={(e) => {
                    e.preventDefault(),
                    git_commit_cmd()
                }}>
                    <input style={{width: '630px'}} onChange={(e) => {setCommitMsg(e.currentTarget.value)}} placeholder="Enter add file"></input>
                    <button type="submit" style={{marginLeft: '8px'}}>コミット</button>
                </form>
            </div>
            <ShowResultMsg resultMsg={result}/>
        </div>
    )
}
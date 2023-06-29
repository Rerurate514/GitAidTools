３．import { invoke } from "@tauri-apps/api"
import { useState } from "react"
import "./componentsStyles.css";

const [branch, setBranch] = useState("")

export const SendBranch = () => {
    return branch
}

export const PushBranch = () => {
    const [result, setResult] = useState("")

    async function git_push_cmd(){
        setResult(await invoke("git_push_cmd",{}))
    }

    return(
        <div>
            <h3>３．このボタンを押すとリモートリポジトリにプッシュされます。</h3>
            <form
            onSubmit={(e) => {
                e.preventDefault(),
                git_push_cmd()
            }}>
                <input style={{width: '95%'}} onChange={(e) => {setBranch(e.currentTarget.value)}} placeholder="Enter branch"></input>
            </form>
        </div>
    )
}
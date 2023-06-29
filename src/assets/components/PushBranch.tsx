import { invoke } from "@tauri-apps/api"
import { useState } from "react"
import "./componentsStyles.css";

export const PushBranch = () => {
    const [branch, setBranch] = useState("")
    const [result, setResult] = useState("")

    async function git_push_cmd(){
        setResult(await invoke("git_push_cmd",{}))
    }

    return(
        <div>
            <h3>３．ブランチを設定してください</h3>
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
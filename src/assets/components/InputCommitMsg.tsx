import { useState, useContext } from "react";
import "./componentsStyles.css";
import { CommandContext } from "./SaveCommandContext";

export const CommitMsg = () => {
    const [commitMsg, setCommitMsg] = useState("")
    const { state, dispatch } = useContext(CommandContext);

    async function context_git_commit_cmd() {
        console.log(`"commitMsg = " + ${commitMsg}`)
        dispatch({ type: "commitMsg", payload: commitMsg})
    }

    return(
        <div>
            <h3>ここにはコミットメッセージを入力してください。</h3>
            <div style={{display: 'inline'}}>
            <input
                 style={{width: '95%'}} 
                 onChange={(e) => {
                    setCommitMsg(e.currentTarget.value)
                    context_git_commit_cmd()
                }} 
                 placeholder="Enter commit message">
            </input>
            </div>
        </div>
    )
}
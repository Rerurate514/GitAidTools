import { useState, useContext } from "react"
import "./componentsStyles.css";
import { CommandContext } from "./SaveCommandContext";

export const PushBranch = () => {
    const [branch, setBranch] = useState("")
    const { state, dispatch } = useContext(CommandContext);

    async function context_git_branch_cmd() {
        console.log(`"branch = " + ${branch}`)
        dispatch({ type: "branch", payload: branch})
    }

    return(
        <div>
            <h3>ブランチを設定してください</h3>
            <input
                 style={{width: '95%'}} 
                 onChange={(e) => {
                    setBranch(e.currentTarget.value)
                    context_git_branch_cmd()
                }} 
                 placeholder="Enter branch">
            </input>
        </div>
    )
}
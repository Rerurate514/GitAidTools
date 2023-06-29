import { invoke } from "@tauri-apps/api"
import { useState } from "react"
import "./componentsStyles.css"
import { SendPath } from "./InputStageFile"
import { SendCommitMsg } from "./InputCommitMsg"
import { SendBranch } from "./PushBranch"
import ShowResultMsg from "./ShowResultMsg"

type Command = {
    addFilePath : String
    commitMsg : String
    selectBranch : String
}

const ExecuteCommandButton = () => {
    const [command, setCommnad] = useState<Command>()
    const [result, setResult] = useState("")

    function startExeCommand(){
        updateCommnad()
        execute_git_cmd()
    }

    function updateCommnad(){
        const str : Command = {
            addFilePath : SendPath(),
            commitMsg : SendCommitMsg(),
            selectBranch : SendBranch()
        }
        setCommnad(str)
    }

    async function execute_git_cmd(){
        const returnResult : String = await invoke("execute_git_cmd",{ command })
        setResult(`${result} + "\n\n" + ${returnResult}`)
    }

    return(
        <div>
            <form>
                <button onClick={startExeCommand}>実行</button>
                <ShowResultMsg resultMsg={result}/>
            </form>
        </div>
    )
}

export default ExecuteCommandButton
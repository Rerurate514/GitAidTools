import { invoke } from "@tauri-apps/api"
import { useState } from "react"
import "./componentsStyles.css"
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
            addFilePath : "SendPath(),",
            commitMsg : "SendCommitMsg(),",
            selectBranch : "SendBranch()"
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
                <button onClick={startExeCommand} style={{width: '100%', marginTop: '32px'}}>実行</button>
            </form>
            <ShowResultMsg resultMsg={result}/>
        </div>
    )
}

export default ExecuteCommandButton
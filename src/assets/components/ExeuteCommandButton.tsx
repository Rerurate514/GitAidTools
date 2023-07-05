import { invoke } from "@tauri-apps/api"
import React, { useState, useContext } from "react"
import "./componentsStyles.css"
import ShowResultMsg from "./ShowResultMsg"
import { CommandContext } from "./SaveCommandContext"


type SetCommand = {
    addFilePath? : String
    commitMsg? : String
    selectBranch? : String
}

type StateType = {
    stateCommand : SetCommand
}

const ExecuteCommandButton = () => {
    const [command, setCommand] = useState<StateType>({
        stateCommand : {
            addFilePath : "",
            commitMsg : "",
            selectBranch : ""
        }
    })
    
    const [result, setResult] = useState("")
    const { state, dispatch } = useContext(CommandContext);

    async function startExeCommand(){

        await updateCommand()
        await execute_git_cmd()
    }

    async function updateCommand(){
        const str : StateType = {
            stateCommand: {
            addFilePath : state.addFilePath,
            commitMsg : state.commitMsg,
            selectBranch : state.selectBranch
        }}

        console.log(`path = ${state.addFilePath}`)
        console.log(`coms = ${state.commitMsg}`)
        console.log(`bran = ${state.selectBranch}`)

        setCommand(str)
    }

    async function execute_git_cmd(){
        git_add_cmd(state.addFilePath != null ? state.addFilePath : "")
        git_commit_cmd(state.commitMsg != null ? state.commitMsg : "")
        git_push_cmd(state.selectBranch != null ? state.selectBranch : "")
    } 

    async function git_add_cmd(_path : String) {
        const returnResult : String = await invoke("git_add_cmd", { path : _path } )
        setResult(`${result}` + "<br><br>" + `${returnResult}`)
    }

    async function git_commit_cmd(_msg : String) {
        const returnResult : String = await invoke("git_commmit_cmd", { commitMsg : _msg } )
        setResult(`${result}` + "<br><br>" + `${returnResult}`)
    }

    async function git_push_cmd(_branch : String) {
        const returnResult : String = await invoke("git_push_cmd", { branch : _branch } )
        setResult(`${result}` + "<br><br>" + `${returnResult}`)
    }

    return(
        <div>
            <button onClick={startExeCommand}  style={{width: '100%', marginTop: '32px'}}>実行</button>
            <ShowResultMsg resultMsg={result}/>
        </div>
    )
}

export default ExecuteCommandButton
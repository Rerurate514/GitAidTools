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
        const returnResult: string = await invoke("execute_git_cmd", {command : {
            addFilePath: command.stateCommand.addFilePath,
            commitMsg: command.stateCommand.commitMsg,
            selectBranch: command.stateCommand.selectBranch
          }});
        setResult(`${result}` + `\n\n` + `${returnResult}`)
    } 

    return(
        <div>
            <button onClick={startExeCommand}  style={{width: '100%', marginTop: '32px'}}>実行</button>
            <ShowResultMsg resultMsg={result}/>
        </div>
    )
}

export default ExecuteCommandButton
import { createContext, useReducer } from "react"

type Command = {
    addFilePath? : String
    commitMsg? : String
    selectBranch? : String
}

type Action = {
    type : String
    payload : String
}

const initCommand : Command = {
    addFilePath: "",
    commitMsg: "",
    selectBranch: ""
}

// createContext()のデフォルト値オブジェクトにasで割り当てる。
type CommandContext = {
    state: Command,
    dispatch: React.Dispatch<Action>
}

const update_command = (_state: Command, action: Action) : Command => {
    switch(action.type){
        case "path": return { ..._state, addFilePath: action.payload }
        case "commitMsg": return { ..._state, commitMsg: action.payload }
        case "branch":  return { ..._state, selectBranch: action.payload }
        default: return _state
    }
}

export const CommandContext = createContext({} as CommandContext)

export const CommandContextProvider = (props : any): JSX.Element => {
    const [state, dispatch] = useReducer(update_command, initCommand)

    return(
       <CommandContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
        {props.children}
        </CommandContext.Provider> 
    )
}
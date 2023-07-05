import { useState, useContext, useEffect } from "react";
import "./componentsStyles.css";
import "./ExeuteCommandButton"
import { CommandContext } from "./SaveCommandContext";

export const InputAddFile = () => {
    const [path, setPath] = useState("");
    const { state, dispatch } = useContext(CommandContext);

    function context_git_add_cmd() {
        console.log(`path = ${path}`)
        dispatch({ type: "path", payload: path})
    }

    return(
        <div>
            <h3>ここにはステージングしたいファイルかディレクトリの絶対パスを入力してください。</h3>
            <div style={{display: 'inline'}}>
                <input
                    style={{width: '95%'}} 
                    onChange={(e) => {
                        setPath(e.currentTarget.value)
                        context_git_add_cmd()
                    }} 
                    placeholder="Enter adding file path">
                </input>
            </div>
        </div>
    )
}
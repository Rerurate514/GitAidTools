import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import "./componentsStyles.css";
import "./ExeuteCommandButton"

export const InputAddFile = () => {
    const [path, setPath] = useState("");
    const [result, setResult] = useState("");

    async function git_add_cmd() {
        setResult(await invoke("git_add_cmd",{ path : path }))
    }

    return(
        <div>
            <h3>１．ここにはステージングしたいファイルかディレクトリの絶対パスを入力してください。</h3>
            <div style={{display: 'inline'}}>
                <form
                onSubmit={(e) => {
                    e.preventDefault(),
                    git_add_cmd()
                }}>
                    <input style={{width: '95%'}} onChange={(e) => {setPath(e.currentTarget.value)}} placeholder="Enter add file"></input>
                </form>
            </div>
        </div>
    )
}
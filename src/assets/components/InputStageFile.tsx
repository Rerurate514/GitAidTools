import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import ShowResultMsg from "./ShowResultMsg"


export const InputAddFile = () => {
    const [path, setPath] = useState("");
    const [result, setResult] = useState("");

    async function git_add_cmd() {
        setResult(await invoke("git_add_cmd",{ path }))
    }

    return(
        <div>
            <h3>１．ここにはステージングしたいファイルかディレクトリの絶対パスを入力してください。</h3>
            <div style={{display: 'flex'}}>
                <form
                onSubmit={(e) => {
                    e.preventDefault(),
                    git_add_cmd()
                }}>
                    <input style={{width: '650px'}} onChange={(e) => {setPath(e.currentTarget.value)}} placeholder="Enter add file"></input>
                    <button type="submit" style={{marginLeft: '8px'}}>add</button>
                </form>
            </div>
            <ShowResultMsg resultMsg={result}/>
        </div>
    )
}
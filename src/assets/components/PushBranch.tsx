import { invoke } from "@tauri-apps/api"
import { useState } from "react"
import ShowResultMsg from "./ShowResultMsg"

const PushBranch = () => {
    const [result, setResult] = useState("")

    async function git_push_cmd(){
        setResult(await invoke("git_push_cmd",{}))
    }

    return(
        <div>
            <h3>このボタンを押すとリモートリポジトリにプッシュされます。</h3>
            <form
            onSubmit={(e) => {
                e.preventDefault(),
                git_push_cmd()
            }}>
                <button type="submit">PUSH</button>
            </form>
            <ShowResultMsg resultMsg={result}/>
        </div>
    )
}

export default PushBranch
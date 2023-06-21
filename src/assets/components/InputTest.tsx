import React, { useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

const TestAPI = () => {
    const [url, setUrl] = useState('')
    const [msg, setMsg] = useState('')

    async function testAuthentication() {
        setUrl(await invoke("test_authentication", { url }))
    }

    return(
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    testAuthentication();
                }}
            >
                <h3>ここにRepositoryのURL</h3>
                <input
                    onChange={(e) => setUrl(e.currentTarget.value)}>
                </input>
                <button type="submit">Check URL!</button>
            </form>
        </div>
    )
}

export default TestAPI
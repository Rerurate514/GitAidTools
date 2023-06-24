import { invoke } from "@tauri-apps/api"

export const OAuthRequest = () => {
    async function oauth_request() {
        await invoke("oauth_request",{})
    }    

    return(
        <div>
            <div style={{height: '100%'}}>
                <div style={{textAlign: 'center', verticalAlign: 'middle', height: '100%'}}>
                <h2 style={{marginTop: '16px'}}>最初にGithubとの連携を行います。</h2>
                <button onClick={oauth_request}>認証する</button>
                <h5 style={{marginTop: '16px'}}>このアプリケーションはOAuth認証を採用しています。</h5>
            </div>
            </div>
        </div>
    )
}
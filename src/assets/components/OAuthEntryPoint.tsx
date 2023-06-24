import { invoke } from "@tauri-apps/api"
import githubLogo from "../image/GitHub-Logo.png"

export const OAuthRequest = () => {
    async function oauth_request() {
        await invoke("oauth_request",{})
    }    

    return(
        <div>
            <div style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    margin: 'auto',
                    // width: '300px',
                    //height: '200px',
                }}>
                    <div style={{
                            textAlign: 'center',
                            background: '#444444',

                            marginTop: '12%',
                            marginBottom: '25%',
                            marginRight: '20%',
                            marginLeft: '20%',

                            borderWidth: '4px',
                            borderColor: '#CCCCCC',
                            borderStyle: 'solid',
                            borderRadius: '7px'
                        }}>
                        <h2 style={{marginTop: '16px'}}>最初にGithubとの連携を行います。</h2>
                        <div style={{margin: '16px'}}>
                            <img src={githubLogo} style={{width: '45%'}}></img>
                        </div>
                        <button onClick={oauth_request}>認証する</button>
                        <h5>このアプリケーションはOAuth認証を採用しています。</h5>
                    </div>
            </div>
        </div>
    )
}
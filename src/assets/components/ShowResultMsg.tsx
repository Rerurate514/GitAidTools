import React, { useEffect, useState } from "react";
import parse from "html-react-parser"
import "./componentsStyles.css";
import { y } from "@tauri-apps/api/path-c062430b";

type ResultMsgProps = {
    resultMsg : string
}

export const ShowResultMsg = (resultProps: ResultMsgProps) => {
    const [result, setResult] = useState<String>("")
    const { resultMsg } = resultProps

    useEffect(() => {
        console.log(resultMsg)
        setResult(resultMsg)
    })

    return(
        <div>
            <div style={{marginTop: '16px',marginBottom: '16px', paddingLeft: '16px',
                                    
                                    background: '#000000',
                                    borderWidth: '4px',
                                    borderColor: '#CCCCCC',
                                    borderStyle: 'solid',
                                    borderRadius: '5px',
                                    }}>
                <div className="word-wrap" style={{ 
                    marginBottom: '16px',
                    color: '#00FF00', 
                    fontFamily: 'JetBrains Mono', 
                    fontStyle: 'normal',

                    }}>
                        <div style={{ overflowY: 'scroll', height: '100px'}}>
                            <h3 style={{color: '#FFFFFF'}}>実行結果</h3>
                            {parse(result as string)}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ShowResultMsg
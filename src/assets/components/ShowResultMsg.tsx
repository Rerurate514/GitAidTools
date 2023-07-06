import React, { useEffect, useState } from "react";
import parse from "html-react-parser"
import "./componentsStyles.css";

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
                                    borderRadius: '5px'}}>
                <h3>実行結果</h3>
                <div className="word-wrap" style={{ color: '#00FF00', fontFamily: 'JetBrains Mono', fontStyle: 'normal' }}>
                    {parse(result as string)}
                </div>
            </div>
        </div>
    )
}

export default ShowResultMsg
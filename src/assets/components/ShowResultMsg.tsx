import React, { useEffect, useState } from "react";

type ResultMsgProps = {
    resultMsg : string
}

export const ShowResultMsg = (props: ResultMsgProps) => {
    const [result, setResult] = useState("")
    const { resultMsg } = props

    useEffect(() => {
        setResult(resultMsg)
    })

    return(
        <div>
            <div style={{marginTop: '16px', paddingLeft: '16px',
                                    
                                    background: '#000000',
                                    borderWidth: '4px',
                                    borderColor: '#CCCCCC',
                                    borderStyle: 'solid',
                                    borderRadius: '7px'}}>
                <h3>実行結果</h3>
                <h4 style={{ color: '#00FF00', fontFamily: 'JetBrains Mono', fontStyle: 'normal' }}>{result}</h4>
            </div>
        </div>
    )
}

export default ShowResultMsg
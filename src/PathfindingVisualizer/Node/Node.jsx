import React from 'react'
import './Node.css'


function Node({ isStart, isFinish }) {
    const extraClassName = isStart ? 'node-start' : isFinish ? 'node-finish' : ''
    return (
        <div className={`node ${extraClassName}`}></div>
    )
}

export default Node

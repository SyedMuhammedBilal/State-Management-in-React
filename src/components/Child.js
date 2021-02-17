import React, {useContext}  from 'react'
import counter from '../context/context'

const Child = () => {
    const context = useContext(counter)
    return (
        <div>
            <h1>Hello my name is {context}</h1>
        </div>
    )
}

export default Child;
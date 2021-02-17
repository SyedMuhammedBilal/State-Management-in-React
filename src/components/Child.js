import React, {useContext}  from 'react'
import counter from '../context/context'

const Child = () => {
    let context = useContext(counter);

    function onIncrement() {
        context[1](++context[0])
    };

    return (
        <div>
            <h1>Hello my name is {context}</h1>
            <button onClick={onIncrement}>Add</button>
        </div>
    )
}

export default Child;
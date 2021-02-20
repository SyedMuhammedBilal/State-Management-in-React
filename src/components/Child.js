import React from 'react';
import { User } from '../App'

const Child = () => {
    return (
        <User.Consumer>
            {(user) => {
                return (
                    <h1>current activity: {user}</h1>
                )
            }}
        </User.Consumer>
    )
};

export default Child;
import React from 'react';
import { User, UserName } from '../App'

const Child = () => {
    return (
        <User.Consumer>
            {(user) => {
                return (
                    <UserName.Consumer>
                        {(name) => {
                            return (
                                <h1>current activity: {user} {name}</h1> 
                            )
                        }}
                    </UserName.Consumer>
                )
            }}
        </User.Consumer>
    )
};

export default Child;
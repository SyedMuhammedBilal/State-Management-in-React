import React, { createContext } from 'react'
import Parent from './components/Parent'

export const User = createContext() // 01 Class
export const UserName = createContext() // 02 Class

function App() {

  return (
    <User.Provider value={'10 users active'}> {/* 01 Class */}
      <UserName.Provider value={'John'}> {/* 02 Class */}
        <Parent />
      </UserName.Provider>
    </User.Provider>
  );
}

export default App;

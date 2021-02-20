import React, { createContext } from 'react'
import Parent from './components/Parent'

export const User = createContext()

function App() {

  return (
    <User.Provider value={'10 users active'}>
      <div>
        <Parent />
      </div>
    </User.Provider>
  );
}

export default App;

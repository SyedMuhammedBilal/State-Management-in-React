import React, { useState } from 'react'
import Parent from './components/Parent'
import CounterContext from './context/context'

function App() {
  const Value = useState(0);

  return (
    <CounterContext.Provider value={Value} >
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

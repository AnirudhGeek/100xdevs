import React, { createContext, useState } from 'react'
import BulbOnOff from './components/BulbOnOff'
import BulbToggle from './components/BulbToggle'

// STEP 1 : Define the context
export const BulbContext = createContext()

// STEP 2 : Create a Provider component that returns the Provider
function BulbProvider({ children }) {
  const [bulbOnOff, setBulbOnOff] = useState(true)

  return (
    <BulbContext.Provider value={{ bulbOnOff, setBulbOnOff }}>
      {children}
    </BulbContext.Provider>
  )
}

const App = () => {
  return (
    <BulbProvider>
      <Bulb />
    </BulbProvider>
  )
}

function Bulb() {
  return (
    <div>
      <BulbOnOff />
      <BulbToggle />
    </div>
  )
}

export default App
//CONTEXT API:-
// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

  //=>JARGON
          // - **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
          // - **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
          // - **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)

import React, { createContext, useState } from 'react'
import BulbOnOff from './components/BulbOnOff'
import BulbToggle from './components/BulbToggle'

// STEP 1 : Define the context
//note that whenever the context is created it is created outside the component chain(usually in a seperate file)
export const BulbContext = createContext()
const App = () => {
  const [bulbOnOff , setBulbOnOff] = useState(true)
  return (
 
    //STEP 2 : Provide the value you want children to have
    <BulbContext.Provider value={{
      bulbOnOff: bulbOnOff,
      setBulbOnOff : setBulbOnOff
    }}>
      <div>
        <Bulb/>
      </div>
    </BulbContext.Provider>
  )
}

function Bulb(){
  return(
    <div>
      <BulbOnOff/>
      <BulbToggle/>
    </div>
  )
}

export default App

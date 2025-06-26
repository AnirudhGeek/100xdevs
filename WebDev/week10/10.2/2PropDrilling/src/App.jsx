import React, { useState } from 'react'
import BulbOnOff from './components/BulbOnOff'
import ButtonToggle from './components/ButtonToggle'

//Prop drilling occurs when you need to pass data from a higher level component down to a lower level component that i s several layers deep in the component tree. This often leads ti the following issues
//  1: Complexity :  You may have to pass props through many intermediate components that dont use the props themselves just to get them to the component that needs them.
//  2: Maintenance : It can make the code harder to maintain as changes in the props structure require updates in multiple components

//example of prop drilling problem 👇

const App = () => {
  const [bulbOnOff,setBulbOnOff] = useState(true)
  return (
    <div>
      <Bulb bulbOnOff={bulbOnOff} setBulbOnOff={setBulbOnOff}/>
    </div>
  )
}

function Bulb({bulbOnOff,setBulbOnOff}){
  return(
    <div>
      <BulbOnOff bulbOnOff={bulbOnOff}/>
      <ButtonToggle setBulbOnOff={setBulbOnOff} bulbOnOff={bulbOnOff}/>
    </div>
  )
}

export default App

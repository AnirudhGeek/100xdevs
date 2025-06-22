//clock with start stop button
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => { 
  const [count,setCount] = useState(0)
  const timer = useRef()

  function startClock(){
    let value = setInterval(() => {
      setCount(c=>c+1)
    }, 1000);
    timer.current = value
  }

  function stopClock(){
    clearInterval(timer.current)
  }
  return (
    <div>
      {count}
      <br />
      <button onClick={startClock}>start</button>
      <button onClick={stopClock}>stop</button>
    </div>
  )
}

export default App

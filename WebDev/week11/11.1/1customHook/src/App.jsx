import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <Counter/>
      <Counter/>
    </div>
  )
}

function useCounter(){
  const [count,setCount] = useState(0)
  function increment(){
    setCount(cnt=>cnt+1)
  }

  return {
    count : count,
    increment : increment
  }
}

function Counter(){
  const {count,increment} = useCounter()
  return(
    <div>
      <button onClick={increment}>Increase {count}</button>
    </div>
  )
}

export default App

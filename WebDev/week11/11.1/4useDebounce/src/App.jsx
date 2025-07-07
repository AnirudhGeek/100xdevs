import React, { useRef } from 'react'

function useDebounce(reqToBackend){
    const clock = useRef()
    function fn(){
        clearTimeout(clock.current)
        clock.current = setTimeout(reqToBackend,200)
    }

    return fn
}

const App = () => {
    
    function sendReqToBackend(){
        fetch("api.amazon.com")
    }

    const debounceFn = useDebounce(sendReqToBackend)

    return (
    <div >
      <input onChange={debounceFn} type="text" />
    </div>
  )
}

export default App

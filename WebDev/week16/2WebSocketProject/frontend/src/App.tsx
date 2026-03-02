  import { useEffect, useRef, useState } from "react";


  const App = () => {

    const [messages , setMessages] = useState(["hey there"])
    // const [inputValue , setInputValue]
    const inputRef = useRef<HTMLInputElement>(null)
    const wsRef = useRef<WebSocket>(null)

    useEffect(()=>{
      const ws = new WebSocket("ws://localhost:8080")

      ws.onmessage = (ev)=>{
        setMessages(m=>[...m,ev.data])
      }

      wsRef.current = ws

      ws.onopen = ()=>{
        ws.send(JSON.stringify({
          "type" : "join",
          "payload" : {
            "roomId" : "red"
          }
        }))
      }


      return()=>{
        ws.close()
      }
    },[])

    return (
      <div className=" w-screen flex flex-col justify-between bg-gray-900">
        <div className="h-[90vh]">
          {
            messages.map(message=>(
              <div className="bg-white px-2 py-4 w-fit rounded m-4">{message}</div>
            ))
          }
        </div>
        <div className="flex items-center gap-5 p-2">
          <input
            type="text"
            className="bg-white text-lg px-1 py-2 text-black w-full border"
            placeholder="Enter your message..."
            ref={inputRef}
          />
          <button onClick={()=>{
            wsRef.current?.send(JSON.stringify({
              "type" : "chat",
              "payload" : {
                "message" : inputRef.current?.value
              }
            }))
            inputRef.current ? inputRef.current.value = "" : null
          }}  className="bg-blue-400 text-2xl p-2 text-white rounded">Send</button>
        </div>
      </div>
    );
  };

  export default App;

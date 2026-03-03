import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState<String[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (ev) => {
      setMessages((m) => [...m, ev.data]);
    };

    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        }),
      );
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <div className="h-[92.4vh] ">
        {messages.map((message) => (
          <div className="bg-white mx-2  my-2 text-black px-2 py-1 rounded-md w-fit">
            {message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter your message..."
          ref={inputRef}
          className="w-screen rounded mx-2 scroll- bg-white px-4 py-2"
        />
        <button
          onClick={() => {
            wsRef.current?.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: inputRef.current?.value,
                },
              }),
            );
            inputRef.current ? (inputRef.current.value = "") : null;
          }}
          className="bg-blue-400 hover:bg-blue-500 hover:cursor-pointer text-white px-3 py-1.5 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;

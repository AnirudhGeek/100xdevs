import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port : 8080})


interface User {
    socket : WebSocket,
    room : string
}

let allSockets : User[] = []


wss.on("connection",(socket)=>{
    socket.on("message",(message)=>{
        const parsedMessage = JSON.parse(message as unknown as string)
        
        if(parsedMessage.type === "join"){
            allSockets.push({
                socket,
                room : parsedMessage.payload.roomId
            })

            socket.send("User joined the room")
        }

        if(parsedMessage.type === "chat"){
            const currentUserRoom = allSockets.find(x=>x.socket === socket)?.room

            if(!currentUserRoom){
                return socket.send("User ain't joined the room yet")
            }
            //or
            // let currentUserRoooom = null
            // for(let i = 0; i< allSockets.length ; i++){
            //     if(allSockets[i]?.socket === socket){
            //         currentUserRoooom = allSockets[i]?.room
            //     }
            // }


            for(let i =0 ; i< allSockets.length ; i++){
                if(allSockets[i]?.room === currentUserRoom){
                    allSockets[i]?.socket.send(parsedMessage.payload.message)
                }
            }
        }
    })
})
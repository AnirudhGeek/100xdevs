import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
            // socket.send("Added to the room!")
        }
        if (parsedMessage.type === "chat") {
            const currentRoom = allSockets.find(r => r.socket === socket)?.room;
            if (currentRoom) {
                allSockets.forEach(s => (s.room === currentRoom ? s.socket.send(parsedMessage.payload.message) : null));
            }
            else {
                socket.send("Cannot find the room");
            }
        }
    });
});
//# sourceMappingURL=index.js.map
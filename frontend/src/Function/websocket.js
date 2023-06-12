const { io } = require("socket.io-client");
const socket = io(
	//!process.env.TEST ? "http://43.207.196.75:3002" :
	"http://localhost:3002"
);

socket.on("connection", () => console.log("Connected to websocket"));

export const listen = (chatId, func) => socket.on(`message-${chatId}`, func);

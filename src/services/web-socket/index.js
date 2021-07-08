import { io } from "socket.io-client";
import config from "../../config";

// const createSocket = ()=>{
    const socket =  io.connect(config.webSocketUrl,{autoConnect : false,transports: ['websocket']});
//     socket.on('connect' ,() => console.log("Web socket opened")) ;

//     socket.on('error',(err) => console.log("Web socket error : ",err)) ;

//     socket.on('close',() => console.log("Web socket closed"))  ;
//     return  socket
// }


export default socket //createSocket

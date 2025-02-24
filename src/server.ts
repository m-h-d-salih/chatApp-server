
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express();

const port = 5000;


const server=createServer(app);
const io=new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"]
  }

});
io.on('connection',(socket)=>{
    console.log(`user connected`);
    socket.on(`message`,(message)=>{
     
      io.emit("message",message);
    })
    socket.on('disconnect',()=>{
      console.log(`disconnected`);
    })
})
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
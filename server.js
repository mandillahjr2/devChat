const express=require("express") 
const {createServer}=require("http")
const { Server } =require("socket.io");

const app=express();
const httpServer=createServer(app)
const PORT=9000;
const io=new Server(httpServer , {cors:{origin:"http://localhost:5500"}});

io.on("connection",(socket)=>{
    console.log("New Client Joined!")
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server running succesfully , App listening for activity on ${PORT}` );
    }
    else{
        console.log(`Error !Server not started `);
    }
})



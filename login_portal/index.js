var express = require("express");
const app = express();

app.get("/helloworld",(req,res)=>{
    res.writeHead(500)
    .end("Not Found");
});

app.listen(3000, ()=>{
console.log("Server started at port at 3000");
});
const http = require("http");
function requestHandler (req,res) {
console.log("In come request from ",req.url);
res.end("Hello world");

}
var server = http.createServer(requestHandler);
server.listen(3000);
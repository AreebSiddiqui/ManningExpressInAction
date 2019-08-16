// In this example Url Module is brought up in scope which retuns an
// url object and that object implemets a parse fucntion 
// Used for Url Parsing
const url=require("url");
const ParsedUrl=url.parse("http://www.example.com/profile?name=barry");
console.log("Protocol:",ParsedUrl.protocol);
console.log("Query:",ParsedUrl.query);
console.log("Slashes:",ParsedUrl.slashes);
console.log("Portno:",ParsedUrl.port);
console.log("Pathname:",ParsedUrl.pathname);
console.log("Host:",ParsedUrl.host);
console.log("Hostname:",ParsedUrl.hostname);
console.log("Authentication",ParsedUrl.auth);

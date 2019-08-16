const fs = require("fs");
var options = {encoding:"utf-8"}
fs.readFile("listing2.11/myfile.txt",options,function(err,data){
    if (err) {
        console.log("Unable to read the file");
        return;
    }
    console.log(data.match(/x/gi).length + " Letter X's");

});

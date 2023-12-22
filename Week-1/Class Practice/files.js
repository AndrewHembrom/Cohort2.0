const fs = require("fs");  //FileSystem module in the Node js environment

fs.readFile("gg.txt", "utf-8", function(err,data){
    console.log(data);
});
const fs = require("fs");

console.log("antes")

fs.readFile("arquivo.txt", "utf-8", function(err, data){
    if(err){
        throw err;
    }
    console.log(data);
})

console.log("depois")
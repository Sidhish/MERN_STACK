const fs=require("fs"); 
fs.readFile("index.txt","utf8",(err,data) => {
    console.log(data);
});
//immediate invoke functional expressions
//Module added in cache and index.js -> life -> {function (___)}
//readFile - is designed to not wait 
//readFileSync -  is designed to wait
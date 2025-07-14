const fs = require("fs");
//  const data  = fs.readFileSync("text.txt","utf-8");
//  console.log(data);
// fs.readFile("text.txt","utf-8",(err,data) => {
//     console.log(data);
// });
// console.log("Hello LPU");

//Write File Asynchronous
// fs.writeFile("text.txt","Hello LPU",(err,res) => {
//     if(err) throw err;
//     console.log("res",res);
// });

//AppendFile
// fs.appendFileSync("text.txt","This is Node JS Batch!!")

// fs.appendFile("text.txt","Hello EveryOne",(err) =>{
//     if(err) throw err;
// });

//Delete
// fs.unlinkSync("text.txt");

// fs.unlink("text.txt", (err) =>{
//     if(err) throw err;
// });


// Create Directory
// fs.mkdirSync("temp");

// fs.mkdir("temp",(err) =>{
//     if(err) throw err;
// })

// Readdir
// fs.rename("add.js","addition.js",(err)=>{
//     if(err) throw err;
// });

//WriteFile
fs.writeFile("temp/index.js","Hello LPU",(err) => {
    if(err) throw err;
});
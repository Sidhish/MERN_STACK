const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    console.log("Server is available");
    // console.log(req.url);
    // const htmlData = fs.readFileSync("index.html",{encoding: "utf-8"});
    // const htmlAbout = fs.readFileSync("about.html",{encoding: "utf-8"});
     if (req.url === '/' || req.url === '/index') {
        const htmlData = fs.readFileSync("index.html", { encoding: "utf-8" });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlData);
    } else if (req.url === '/about') {
        const aboutData = fs.readFileSync("about.html", { encoding: "utf-8" });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(aboutData);
    } else if (req.url === "/contact"){
        const contact = fs.readFileSync("contact.html",{encoding:"utf-8"});
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contact);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("404 error");
    }

    // res.writeHead(200,{"Content-Type":"text/html"});
    // res.end(htmlData);

});

server.listen(3001, () => {
    console.log("Server is live on port 3001");
});

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     console.log("Server is Available");
//     const student ={
//         name: "Sidhish",
//         college: "LPU"
//     };
//     res.writeHead(200,{"Content-Type":"application/json"});
//     res.end(JSON.stringify(student));
// });
// server.listen(3001, () => {
//     console.log("Server is live on port 3001");
// });
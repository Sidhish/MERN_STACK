// const express = require("express");

// const app = express();
// const student ={
//     name : "sidhish",
//     college : "LPU",
//     age : "19",
// };

// app.get("/",(req,res) => {
//     // console.log("Hello Node Application");
//     res.status(200).header({"Content-Type":"text.html"}).json(student).end();
// });
// app.get("/about",(req,res) => {
//     // console.log("Hello Node Application");
//     res.status(200).header({"Content-Type":"text.html"}).send("<h1> About page </h1>").end();
// });
// app.get("/contact",(req,res) => {
//     // console.log("Hello Node Application");
//     res 
//         .status(200)
//         .header({"Content-Type":"text.html"})
//     res.status(200).header({"Content-Type":"text.html"}).send("<h1> Contact Here </h1>").end();
// });
// app.listen(3001,() => console.log("Server is Running on 3001"));

const express = require("express");
const path = require("path");
const { json } = require("stream/consumers");

const app = express();

const student = {
  name: "Aditya",
  college: "LPU"
};

app.get("/", (req, res) => {
  res.status(200).header({ "Content-Type": "application/json" }).json(student).end();
});
app.get("/about", (req, res) => {
  res.status(200).header({ "Content-Type": "text/html" }).send("<h1>About</h1>").end();
});
app.get("/contact", (req, res) => {
  res
    .status(200)
    .header({ "Content-Type": "text/html" })
    .sendFile(path.join(__dirname, "contact.html"));
});
// app.get("/profile/:username/:age",(req,res) => {
//     console.log({Request: JSON.stringify(req.params)});
//     res.send("This is profile Route");
// });
app.get("/search/:username" , (req,res) => {
    // console.log("QueryParams: ",JSON.stringify(req.params));
    res.json({queryParams: req.query,pathParams: req.params});
});
app.use(express.json());

app.post("/user",(req,res) => {
    //ANCHOR - creating a document
    console.log("Body: ",req.body);
    console.log("Cookies: ",req);
    // res.send("This is a post user request api");
    res.json({Body: req.body,Cookies: req.headers.cookies});
});
app.patch("/user",(req,res) => {
    //ANCHOR - updating the document
    console.log("Body: ",req.body);
    res.json(req.body);
    
});
app.put("/user",(req,res) => {
    console.log("Body: ",req.body);
    res.json(req.body);
});
app.listen(3001, () => console.log("Server is running on 3001"));

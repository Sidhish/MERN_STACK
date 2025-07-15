//server.js
const express = require("express");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const logMiddleware = require("./middleware/log.middleware");
const adminMiddleware = require("./middleware/admin.Middleware");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
// app.get("/",logMiddleware, (req, res) => {
  console.log("token: ",req.token);
  res.sendFile(path.join(__dirname, "/public", "/index.html"));
});


app.get("/admin",adminMiddleware,logMiddleware,(req,res)=>{
  res.status(200).send("<h1>Admin Dashboard</h1>");
});
app.get("/404",logMiddleware,(req,res)=>{
  res.status(404).send("<h1>Page not found</h1>");
});

app.post("/submit", (req, res) => {
  console.log("Body: ", req.body);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.WEATHER_API_KEY}`
    )
    .then((response) => {
      const weather = {
        cityName: response.data.name,
        type: response.data.weather[0].main,
        description: response.data.weather[0].description,
        temprature: response.data.main.temp,
        visibility: response.data.visibility,
        speed: response.data.wind.speed
      };
      const data = fs.readFileSync(path.join(__dirname, "/public", "/weather.html"), {
        encoding: "utf-8"
      });
      let html = data
        .replace("{{{cityName}}}", weather.cityName)
        .replace("{{{type}}}", weather.type)
        .replace("{{{description}}}", weather.description)
        .replace("{{{temperature}}}", (weather.temprature-273.56).toFixed(2))
        .replace("{{{visibility}}}", weather.visibility)
        .replace("{{{speed}}}", weather.speed);
      res.status(200).send(html);
    })
    // .then(response => res.status(200).json(response.data))
    .catch((error) => res.status(400).send(`Error: ${error.message}`));
});
app.listen(3001, () => console.log("Server is running on 3001"));

//Login->Email&Password->/api/login(POST)|---->Email---true--->Password match?---true--->setCookie(Email)
                                      // |    False            error:password          Response sent
            //client                   //|    ///Signup     ((SERVER))

//On website load------->/api/auth(GET)----->is| email cookie exist---true--->Get user by email---true--->send response---->store Redux
                                        //     | False(Redirect user to login)                                      |
                           //client            |                           server               //                  -->store inside session storage

// import chalk from 'chalk'

// console.log(chalk.blue("Hello World!!"));
// console.log(chalk.red("ERROR!!"));

// import log from "./logger.js"

// log.error("This is an Error");
// log.warn("This is an Warning");
// log.success("This is an Success");
// log.info("This is an Info");

const fs = require("fs");
const csvFilePath='./customers-100.csv'
const csv= require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    fs.writeFile("./data.json",JSON.stringify(jsonObj),"utf-8",)
    console.log(jsonObj);

})

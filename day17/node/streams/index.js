//Read Stream
//Write Steam
//TransForm => conversion
//Duplex => read and write
// const fs = require("fs");
// //Read Stream
// const stream = fs.createReadStream("./index.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// // stream.on("data", (chunks) => {
// //   console.log("Reading Stream ....", chunks);
// // });

// const writeStream=fs.createWriteStream("../output.txt");
// stream.on("data",(chunks)=>{
//     console.log("Reading Stream...",chunks);
//     writeStream.write(chunks);
// });
const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
fs.createReadStream("index.txt")
    .pipe(gzip);
    .pipe(fs.createWriteStream);
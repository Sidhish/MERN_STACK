// function logMiddleware(req, res,next){
//     console.log(`Request URL: ${req.url}`);
//     console.log(`Request Method: ${req.method}`);

//     next();
// }
// module.exports = logMiddleware;

const fs = require("fs");
const path = require("path");

function logMiddleware(req, res, next) {
  const log = `Time: ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url}\n`;
  fs.appendFileSync(path.join(__dirname, "../public/log.txt"), log);
  console.log(log);
  next();
}

module.exports = logMiddleware;

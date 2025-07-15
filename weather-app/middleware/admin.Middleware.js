// const fs = require("fs");
// const path = require("path");

function adminMiddleware(req, res, next) {
  req.token="admin";
  if(req.token!=="admin"){
    // res.status(404).redirect('/404');
    res.status(404).setHeader(
      ("set-Cookie",`email=abc@gmail.com;Path=/;HttpOnly;`).redirect("/404")
    )
    return;
  }
  next();
}

module.exports = adminMiddleware;

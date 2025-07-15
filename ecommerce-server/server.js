const express = require("express");
const userController = require("./controller/user.controller");
const userRouter = require("./routes/user.router");
const userProduct = require("./routes/product.route");
const app = express();
app.use(express.json());
app.use("/users",userRouter);
app.use("/users",userProduct);
app.listen(3001, ()=> console.log("Server is live at 3001 port!!"));
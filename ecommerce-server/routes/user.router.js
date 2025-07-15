const express = require("express");
const {getUser,createUser} = require("../controller/user.controller");
const router = express.Router();

// router.get("/",(req,res) => {
//     res.status(200).send("This is a user router");

// });
// router.get("/users",(req,res) => {
//     res.status(200).send("This is a user router");
// });
router.get("/",getUser);
router.get("/user",getUser);
router.post("/",createUser);

module.exports = router;
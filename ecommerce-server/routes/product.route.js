const express = require("express");
const {getUser,createUser} = require("../controller/product.controller");
const router = express.Router();

router.get("/",getUser);
router.get("/user",getUser);
router.post("/",createUser);

module.exports = router;
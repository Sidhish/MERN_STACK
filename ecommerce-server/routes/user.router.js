//user .route


const express = require('express');
const { getUser, createUser } = require("../controller/user.controller");
const { getProduct, createProduct } = require("../controller/product.controller");

const router = express.Router();

router.get("/user", getUser);         
router.post("/user", createUser);     

router.get("/product", getProduct);       
router.post("/product", createProduct);    

module.exports = router;

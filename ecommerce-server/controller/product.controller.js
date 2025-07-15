//procuct.controller
function getProduct(req, res) {
    res.status(200).send("This is a product router");
}
function createProduct(req, res) {
    res.status(200).send("This is a product post router");
}

module.exports={getProduct,createProduct};
function getUser(req,res) {
    res.status(200).send("This is a user product");
}
function createUser(req,res){
        res.status(200).send("This is a user product");
}
module.exports = {getUser,createUser};
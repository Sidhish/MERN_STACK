function getUser(req,res) {
    res.status(200).send("This is a user router");
}
function createUser(req,res){
        res.status(200).send("This is a user router");
}
module.exports = {getUser,createUser};
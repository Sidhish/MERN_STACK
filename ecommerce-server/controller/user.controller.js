
const User = require('../models/user.models');
function getUser(req, res) {
    res.status(200).send("This is a user router");
}
async function createUser(req, res) {
    const {name, email, password} = req.body;
    const userRes =await User.create({
        // name:"Sidhish",
        // email:"sidh@gmail.com",
        // password: "12345678"
        name,
        email,
        password
    });
    console.log(`User Created: `,JSON.stringify(userRes));
    res.status(200).send("This is a user post router");
}

module.exports={getUser,createUser};

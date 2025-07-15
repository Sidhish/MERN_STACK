const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type: String,
        require:true,
        minLength: 5
    },
    email:{
        type: String,
        require:true,
        unique: true,
    },
    password:{
        type: String,
        require:true,
        minLength: 8
    },
    createdAt:{
        type: Date,
        default: new Date().toISOString()
    }
});

const user = mongoose.model('user',userSchema);
module.exports = user;
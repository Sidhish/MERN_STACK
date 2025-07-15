// const mongoose = require("mongoose");

// mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// .then(() => console.log("Mongodb is Connected"))
// .catch((err) => console.log("Mongodb error: ",err));

//index
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB is Connected");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


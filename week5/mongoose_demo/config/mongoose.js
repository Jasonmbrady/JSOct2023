const mongoose = require("mongoose");
//                          127.0.0.1
mongoose.connect("mongodb://localhost/mongoose_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Connected to Mongodb!") )
    .catch( err => console.log("Something went wrong!", err) )
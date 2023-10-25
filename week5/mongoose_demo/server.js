const express = require("express");
const app = express();
app.use(express.json(), express.urlencoded({extended: true}));

// configure mongoose
require("./config/mongoose");

//require routes
require("./routes/drinks")(app);

app.listen(8000, ()=>console.log("Server running on port 8000!"))
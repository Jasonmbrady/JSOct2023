const express = require('express');
const app = express();
const PORT = 8000;

// Route Declaration
const routes = require("./routes/userRoutes");
routes(app);
// require("./routes/userRoutes")(app)

app.listen( PORT, () => console.log("Server listening on port " + PORT));
const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json(), express.urlencoded({extended: true}));
// Route Declaration
const routes = require("./routes/userRoutes");
routes(app);
// require("./routes/userRoutes")(app)

app.listen( PORT, () => console.log("Server listening on port " + PORT));
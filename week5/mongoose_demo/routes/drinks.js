const drinksController = require("../controllers/drinks");

module.exports = (app) => {
    app.get("/api/drinks", drinksController.findAll);
    app.post("/api/drinks", drinksController.create);
}
const UserController = require("../controllers/userController");

module.exports = app => {
    // RESTful 
    app.get("/api/users", UserController.getAll);
    app.get("/api/users/:name", UserController.getOneByName);
    app.post("/api/users", UserController.create);
    app.put("/api/users/:id", UserController.update);
    app.delete("/api/users/:id", UserController.delete);
}
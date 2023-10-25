const Drink = require("../models/Drink");

module.exports = {
    findAll: (req, res) => {
        Drink.find()
            .then( allDrinks => res.json(allDrinks) )
            .catch( err => console.log(err) );
    },

    create: (req, res) => {
        Drink.create(req.body)
            .then( newDrink => res.json(newDrink))
            .catch( err => console.log(err) );
    }
}
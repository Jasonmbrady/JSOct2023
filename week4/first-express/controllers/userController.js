// require our model
const userArray = [{name: "Jason"}, {name: "Corey"}, {name: "Caden"}, {name: "Melissa"}]

module.exports.getAll = (req, res) => {
    return res.json(userArray);
}

module.exports.getOneByName = (req, res) => {
    // [{name: "Melissa"}]
    const {name} = req.params;
    const matchingUsers = userArray.filter( user => user.name === name);
    return res.json(matchingUsers[0]);
}

module.exports.create = (req, res) => {
    const newUser = {
        name: req.body.name
    };
    // newUser.id = userArray.length + 1
    userArray.push(newUser);
    return res.json(newUser);
}
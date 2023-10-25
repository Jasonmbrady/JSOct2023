// require our model
let userArray = [{name: "Jasom", id: 1}, {name: "Corey", id: 2}, {name: "Caden", id: 3}, {name: "Melissa", id: 4}]

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
    }
    newUser.id = userArray.length + 1;
    userArray.push(newUser);
    return res.json(userArray);
}

module.exports.update = (req, res) => {
    const {id} = req.params;
    for (let i=0; i<userArray.length; i++){
        if (i === id - 1){
            userArray[i] = {...req.body}
        }
    }
    return res.json(userArray);
}

module.exports.delete = (req, res) => {
    const {id} = req.params;
    const updatedArray = [];
    for ( let i = 0; i < userArray.length; i++){
        if (i !== id - 1){
            updatedArray.push(userArray[i]);
        }
    }
    userArray = [...updatedArray];
    return res.json(userArray);
}
const express = require("express");
const app = express();
const {faker} = require("@faker-js/faker");

const createUser = () => {
    const newFake = {
        _id: Math.floor(Math.random() * 10000),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newFake;
}

app.get("/api/users/new", (req, res) => {
    // return a new fake user
    return res.json(createUser());
})
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
app.listen(8000, ()=>console.log("Faker API running on port 8000!"));
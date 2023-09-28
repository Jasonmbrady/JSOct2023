// TERNARY STATEMENTS
const tossCoins = (numOfCoins) => {
    for (let i=0; i < numOfCoins; i++){
        const result = Math.floor(Math.random() * 2);
        if (result === 0){
            console.log("Heads")
        } else {
            console.log("Tails")
        }
    }
}

const ternaryCoinToss = () => Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails";

// tossCoins(5);
// console.log(ternaryCoinToss());
// COMPARISON OPERATOR
console.log(5 === "5");


// CALLBACKS
// Function handed off to another function as an argument

// MAP AND FILTER
// built-in functions on arrays

let pizzas = ["Pepperoni", "Veggie", "Just Cheese", "Meat Lovers"]
Object.freeze(pizzas);
// pizzas.push("Hawaiian");
// pizzas = [...pizzas, "Hawaiian"];
const filteredPizzas = pizzas.filter( onePizza => {return onePizza !== "Veggie"} )
// console.log(filteredPizzas);
// console.log(pizzas);
pizzas.map((onePizza)=>{
    console.log(onePizza);
})


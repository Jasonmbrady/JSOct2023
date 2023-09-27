// ECMAScript / ES6+ / Javascript
/*
https://webreference.com/javascript/basics/versions/
*/
var myString = "Hello, World!";

let myOtherString = "Hiya";
const yetAnotherString = "Word";
// Scope: A block of code where variables exist
function doStuff() {
    // var message;
    var isTrue = true;
    console.log(message);
    if (isTrue) {
        var message = "It's true";
        console.log(message);
    }
    console.log(message);

}
// doStuff();

const addTwoNumbers = (num1, num2) => num1 + num2;


// console.log(addTwoNumbers(10, 7));

// DESTRUCTURING
let a = 10;
let b = 5;
// CLASSIC SWAP
// let temp = b;
// b = a; 
// a = temp; 
// DESTRUCTURED SWAP
[a, b] = [b, a];

// INTERACTING WITH ARRAYS OR OBJECTS BY INTERACTING WITH SPECIFIC KEYS/INDICES

const student = {
    fName: "Jason",
    lName: "Brady",
    gpa: 4.0
}

// console.log(student.gpa)

const gpa = student.gpa * .9;
console.log(gpa);
const updatedStudent = {...student, gpa}
console.log(updatedStudent);

const fruitArray = ["apple", "banana", "peach"]

const updatedArray = [...fruitArray, "plum"];
console.log(updatedArray);
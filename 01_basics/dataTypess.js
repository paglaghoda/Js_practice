console.log("Data Types pata karte hai dosto!")

// Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol
let valString = "Omkar";
let valNum = 99.99;
let valBool = true;
let age = 19;
let clg = undefined;
let bhuru = null;
let valSymbol = Symbol(valString);

console.log(valString===valSymbol)
// console.log(valString);
// console.log(valSymbol);

//Non-Primitive Data Types: Array, Objects, Functions
let myArray = ["Omkar", "bhai","meow meow", 10, "Om!"]
let myObj = {
    "name": "Omkar",
    "Age": 19
}
function funky() {
    console.log("Omkar Bhai!") 
}

console.log(myArray, myObj, funky())

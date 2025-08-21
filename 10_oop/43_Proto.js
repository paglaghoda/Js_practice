//Less go

//What if i want to find something like: true length of a string without whitespaces?
// Simple, apply trim() and then apply length property to find the true length
//Okay cool, but what if there are 100 strings? would u apply it on each one of them? wont that be too long
//Instead what if there was a new method like .trueLength(), damn that would be nice
//Okay, let's create it then

let myName = "paglaGhoda"
// console.log(myName.trueLength());
//OP: error

String.prototype.trueLength = function(){
    return this.trim().length //"this." here is the most imp thing as it gives the function the current context
    // to use the string
}

// console.log(myName.trueLength());
//OP: 10

//Now, if you think far, there's one more thing, 
// String -> Obj
// Array -> Obj
// Function -> Obj
// If fuckin' everything is an object, We can definetly create a method directly on that parent Obj which
// holds every other thing making it universally accessible to all data types like strings, int, methods/functions
// like, directly on, Object.prototype.meraFunc = (){}


//Now, Let's how to inherit protypal features
//Old syntax was using: __proto__ to declare
//New Syntax:
let obj1={
    myName: "Bhai"
}
let her={name: "me"}
Object.setPrototypeOf(obj1, her) //obj1 inherting methods and other variables from the "her" object
console.log(obj1.name);
//OP: me

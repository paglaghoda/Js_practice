//Falsy values
//false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//Truthy values
// "0", 'false', function(){}, {}, []

//To check if a string is empty in a condition
const userEmail="";
if (userEmail){
    console.log("Done")
} else {
    console.log("Meow meow")
}

//To check for the emptiness of an array
const userName =[]
if (userName.length===0){
    console.log("Present")
} else {
    console.log("Absent")
}

//to check emptiness in an object
const newObj={}
if (Object.keys(newObj).length === 0) {
    console.log("Present")
} else {
    console.log("Absent")
}

//Nullsh Coalescing Operator (??): null , undefined
//Basically for Error handling

let val1, val2, val3;

val1= 9?? 10
val2= null ?? 10
val3= undefined ?? 15;

console.log(val1,val2,val3)

//Babe, new way to define if else just dopped
//Terniary Operator
//condition? true: false

const teaTeaPrice = 100;
teaTeaPrice >= 100 ? console.log("Pricy") : console.log("Sasta")
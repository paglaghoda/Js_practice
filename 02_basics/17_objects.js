//Laila ko lagta hai me farebi! Dana dana danan dandan

const myObj = {
    name: "omkar",
    age: 19
}

myObj.state="Odisha";
myObj.marks=99;

console.log(myObj)
//{ name: 'omkar', age: 19, state: 'Odisha', marks: 99 }

myObj.address={
    Line1: "Shital Nagar, Bondamunda",
    city: "Rourkela",
    PIN: 770032
}

console.log(myObj)

const newObj ={}
newObj.productName="A4 Paper";
newObj.price=199;

//Combining Objects
const combObj = Object.assign({}, myObj, newObj) // Way 1
console.log(combObj)
console.log({...myObj,...newObj}) // Way 2

//Extracting elements from Objects: extracted to Arrays mind u
console.log(Object.keys(combObj)) 
console.log(Object.values(combObj)) 

//Entries method: Returns the arrayed array of an Object
console.log(Object.entries(combObj))

//Let's see the type of different objects
console.log(typeof combObj, typeof myObj, typeof newObj)
//OP: object object object

//HasOwnProperty: to test if an object contains a property/attribute basically KEY bhai
console.log(combObj.hasOwnProperty("age"))
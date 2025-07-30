//Ye ishq tune kya kiyaaaa...

//Basic function calling
function addNum(Num1, Num2){
    return (Num1 + Num2)
}
console.log(`The Result of Addition is ${addNum(6,7)}`)

//Using default parameters
function displayName(name = "Omkar"){
    return `The User's name is ${name}`
}
console.log(displayName("Rahul"))

//Quite a good example of manipulating an Object's data using a function {Source: MDN}

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"



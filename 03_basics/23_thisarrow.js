//I need somebody who can love me at my worst!

//Charcha .this pe: Where to use this? Use it wherever you want to refer to the local variable rather than the global variable;
// Nahi toh for variables with same name, compiler with resolve the SCOPE, and take the global one or just conflict with each other

//Let's make an object

let myName = "Om"
let myAge = 19
const Student = {
    myName: "Omkar",
    myAge: 19,
    displayDetails(myName, myAge){ //Parameters are greyed out becoz the return statement is referring to the object's variable names and not the function parameters name becoz of .this 
        return `Hi, My Name is ${this.myName} and I am ${this.myAge} years old!`
    }
}

const fStudent = {
    myName: "Her",
    myAge: 19,
    displayDetails(myName, myAge){
        return `Hi, My Name is ${myName} and I am ${myAge} years old!`
    }
}

console.log(Student.displayDetails()) //Hi, My Name is Omkar and I am 19 years old!
console.log(fStudent.displayDetails("Her",19)) // Hi, My Name is Her and I am 19 years old!

//Btw this won't work on standalone function; waise jarrurat bhi kya hai; standlone function me
// you already directly use function parameters variable name in the function body

function myHer(herSmile){
    return `The Greatest smile award goes to ${herSmile}`
}
console.log(myHer("Smile bbg")) //OP: The Greatest smile award goes to Smile bbg

//BUt but but, if we add a global var, herSmile before the function
hisSmile = "aeeeee"
function hisMine(hisSmile){ //Greyed out, becoz referring to global var
    return `The Greatest smile award goes to ${this.hisSmile}`
}
console.log(hisMine("Smile bbb")) //OP: The Greatest smile award goes to aeeeee

//Now let's go to Arrow Function
//There are more ways to declare a function

//Few ways

function funcOne(num1 = 10, num2 = 20){
    return num1+num2
}

const funcTwo = function(num1 = 10, num2 = 20){
    return num1+num2
}

const objOne = {funcThree: function(num1 = 10, num2 = 20){
    return num1+num2
}} //Inside an Object

let funcFour = (num1 = 10, num2 = 20) => {
    return num1+num2
}

let funcFive = (num1 = 10, num2 = 20) => (num1+num2)
 
console.table({
    funcOne: funcOne(),
    funcTwo: funcTwo(),
    funcThree: objOne.funcThree(),
    funcFour: funcFour(),
    funcFive: funcFive()
});

//Itna hi tha; but thoda hard toh tha; dimag jyada laga issme
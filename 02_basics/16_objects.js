//Dur na jana tu mujhse duur, aaah, aah ah, duur na jana tu mujhese duur 

//How to create an object:

//First method
let studentDetails = {
    reg: "24BCE10843",
    name: "Omkar Sahay",
    age: 19,
    gender: "male",
    state: "Odisha",
    height: 174,
    weight: 66,
    displayDetails() {console.log(`This is ${this.name}, aged ${this.age} years old`)}
}

let acadDetails = {
    reg: "24BCE10843",
    maths: 100,
    english: 99,
    physics: 100,
    chemistry: 100
}

//2nd Method
// What i am trying to do: create an object using a strucutre and then call another containing a dispay method.
// THIS SHIT DOESNT WORK; AND I NEED TO UNDERSTAND WHY? niche wala

const oneObj = {
    reg: "24BCE10843",
    displayDetails() {console.log(`This is ${this.name}, aged ${this.age} years old, based out of ${this.state}.`)}
}

let newObj = Object.create(oneObj, {
    acadDetails: {
    reg: "24BCE10843",
    maths: 100,
    english: 99,
    physics: 100,
    chemistry: 100
        }, 
    studentDetails: {
    reg: "24BCE10843",
    name: "Omkar Sahay",
    age: 19,
    gender: "male",
    state: "Odisha",
    height: 174,
    weight: 66
        }
})

newObj.displayDetails()


//Accessing elements from an Object
console.log(studentDetails["reg"])
console.log(studentDetails.gender)
console.log(studentDetails.displayDetails())
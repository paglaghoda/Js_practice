//Tu nu nu ... tu nu nu..dagabaaz re..tore naina bade dagabaaz re


//Using Rest Operator for packing extra values into a new array
function returnFirstNumOnly(num1, ...num2) {
    if (Number.isInteger(num1)){
        return num1
    }
    return null

}
console.log(`The Number is ${returnFirstNumOnly(20,30,40,"Omkar")}`)

//Type safety check during calling a function with an object
const myObj = {
    name: "Omkar",
    age: 19
}

function callingObj(objToCall){
    if (typeof objToCall.name==="string" && typeof objToCall.age==="number") 
        {return `My Name is ${objToCall.name} and I am ${objToCall.age} years old. Thank you bbg!`}
    return `False Value`
}

console.log(callingObj(myObj))

//Calling Function with an Array and an Object
const oneObj = {
    name: "Omkar",
    age: 19
}
const Arr = ["Omkar",19] //Agar in dono me se kisi ka data type change ho jaaye toh niche wale function ka else execute ho jayega fyi

function inputArraynObj(TwoObj, NewArr){
    if (typeof TwoObj=="object" && Array.isArray(NewArr)){
        return `The Object's values are ${Object.values(TwoObj)} and the Array's elements are ${NewArr}`
    }
    return "False Value"
}

console.log(inputArraynObj(oneObj,Arr))
//Jaat da pyar goriye

const myObj = [{
    myName: "Omkar",
    age: 19
}]

const herArr = [1,2,3,4,5]

const newNum = herArr.forEach( (element) => element>1 ) //OP: undefined
//For Each doesn't RETURN anything, it is supposed to be written with a Console.log method

herArr.forEach( (element) => {
    console.log(`Bhai ${element}`)
} )

myObj.forEach( (element) => {
    console.log(`Bhai ${element.myName}`)
} )

//ForEach: A loop method for Array which is used with console log method and doesn't return anything
//Now, what for checking conditions and printing elements from a array

//One way is to use forEach and other way is to use Filter

herArr.forEach( (num)=> {
    if (num>2){
        console.log(`${num}`)
    }
} )

//but this can be further improved as:
const newArrNum = herArr.filter( (num) => num>2) //Single line function
const meowNum = herArr.filter( (num) => { return num>2}) //with {} use return statement mandatorily
//Filter method: Applies a condition on an Array and returns a value
console.log(newArrNum)

//Now trying to extrapolate from a API Call JSON

const data = [
  { id: 1, name: "Alice", age: 25, role: "Developer", salary: 60000 },
  { id: 2, name: "Bob", age: 30, role: "Designer", salary: 55000 },
  { id: 3, name: "Charlie", age: 28, role: "Manager", salary: 70000 },
  { id: 4, name: "Diana", age: 22, role: "Intern", salary: 30000 },
  { id: 5, name: "Eve", age: 35, role: "Analyst", salary: 65000 }
]

console.log(data.filter( (eachValue) => eachValue.age>=25 && eachValue.salary>=60000 ))
/* OP: [
  { id: 1, name: 'Alice', age: 25, role: 'Developer', salary: 60000 },
  { id: 3, name: 'Charlie', age: 28, role: 'Manager', salary: 70000 },
  { id: 5, name: 'Eve', age: 35, role: 'Analyst', salary: 65000 }
]
*/
console.log(data.filter( (eachValue) => {
    return eachValue.age>=20 && eachValue.salary>=70000} ) //{} comes with a return statement
) // OP: [ { id: 3, name: 'Charlie', age: 28, role: 'Manager', salary: 70000 } ]


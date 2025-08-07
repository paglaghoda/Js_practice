const myArr = [1,2,3,4,5,6,7,8,9,10]

const result = myArr.map( (num) => num*10  )
console.log(result)
//OP: [
//   10, 20, 30, 40,  50,
//   60, 70, 80, 90, 100
// ]

//Chaining: applying multiple functions
const newResult = myArr
        .map( (num) => num*10)
        .filter( (num) => num>50)
        .map( (num) => {return num/10})
console.log(newResult)

//Abhi tak what have we studies: iterators me: 
// for, while, do while, for-of, for-in, forEach, filter, map

//Reduce function
//Syntax: Array.reduce(callbackfunc, initialValue)

// const reduceVal = myArr.reduce( (item, curr) => item+10, 0 )
// console.log(reduceVal) //Totally wrong

let total=0
for (let i=0; i<11; i++){
    total+=i
}
console.log(total) //OP != 0 like the above reduceVal

//Reduce function is used for Suming up, multiplying and basically performing operations
let iniVal=1;
const redVal = myArr.reduce( (item, curr) =>  item*curr, iniVal)
console.log(redVal)
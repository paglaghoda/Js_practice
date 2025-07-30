//Ahh shit here wo go again

//Declaring a function with two ways
function addNum(num1, num2){
    return num1+num2
}

const result= function(num1,num2){
    return num1+num2
}

console.log(result(3,4))
console.log(addNum(5,6))

//But khela tab hoga jab, we will rearrange the statements before the function and then
//scope kharab ho jayega as, agar we call the normal function before the function definition, it works
// But in case of the variable function declaration, agar definition ke pehle function call hua
//toh it won't be able to access the function and will give Variable/function not defined

//Example
console.log(addNum2(5,6))
function addNum2(num1, num2){
    return num1+num2
} //OP: => 11

console.log(result2(3,4))
const result2= function(num1,num2){
    return num1+num2
} //=> This block gives error

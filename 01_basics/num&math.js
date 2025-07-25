//Making variables by specifing their TYPE explicitly

//without specifying
const marks = 100;
console.log(marks)

//Specifying the TYPE by explicitly creating AN OBJECT! Object in JavaScript are JSON (key value paur)
const markss = new Number(999);
console.log(markss)
// Output: [Number: 1000] , confirming this is an object

//Now, What if object me se, sirf mujhe Key/Value chahiye
// With this being an object, hume bahut saare new tools/methods milte hai to operate on this

console.log(markss.toFixed(3))

//Locale String, so as to add commas to big number. 1,00,000 or 10,000,000; kaise? niche dekho
console.log(markss.toLocaleString('en-US'))

//Maths Library
console.log(Math.random()) //Genrates a num between 0 and 1

//What to do now, in order to generate a num between a and b;
let max=29;
let min=39;
console.log(Math.ceil(Math.random()*(max-min))+min)



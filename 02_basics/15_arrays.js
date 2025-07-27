//Arrays trying to merge bbg

let myArr = [1,4,3,"bbg"]
let herArr = [1,4,3, "too"]
let bhaiArr = [1]

console.log(myArr==herArr); //Checking if two arrays are same

myArr.push(herArr)
console.log(myArr);
// OP: [ 1, 4, 3, 'bbg', [ 1, 4, 3, 'too' ] ]

//But i want to add individual elements, then?
let newArr = myArr.concat(herArr);
console.log(newArr)

//You can also spread it like a Jam!
newnewArr = [...myArr, ...herArr, ...bhaiArr];
console.log(newnewArr)

//Ye toh ho gyi baat, Elements array me daalne ki, what if mujhe elements nikalne hai? Phir?
badiSiArr=[myArr, herArr, 9,8,7]
console.log(badiSiArr)
console.log(badiSiArr.flat(2))


//What if I want to check if an "thing" is an Array? or I want to make an array out of random elements using a method instead
console.log(Array.isArray(myArr));
console.log(Array.from([2,5,6], (x) => (x+1/2)*x^2));
console.log(Array.of("Omkar","is a","good boi!"))
console.log(newArr=Array.of("Omkar","is a","good boi!"))
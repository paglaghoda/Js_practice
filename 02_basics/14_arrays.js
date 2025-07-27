//Maskali maskali, hud matakali

//Declaring a String

const oneString = "Omkar";
const twoString = String("OmkarSahay");
const threeString = new String("Omkar Bhai")

console.log(oneString, "->", typeof oneString);
console.log(twoString, "->", typeof twoString);
console.log(threeString,"->", typeof threeString);

//Aree chacha Choudhary, seekh toh array rehe the aap
//Sorrero Rocher

//Arrays are Objects

const myArr= [1,4,3, "Forver and until"]
const herArr = new Array(1,4,3,"Too!","Forever and until")

console.log(myArr, typeof myArr);
console.log(herArr, typeof herArr);

//Trying Array methods and other manipulation techinques
console.log(myArr.length)

console.log(myArr.push("Dreamy"))
console.log(myArr)

console.log(myArr.pop())
console.log(myArr)

console.log(myArr.includes(1))
console.log(myArr)

//Shift and UnShift
console.log("Shifting: ",myArr.shift()) //Basically shift works as pop()
console.log(myArr)

console.log("UnShifting: ",myArr.unshift(1)) 
//and unshift returns the length of the new array after adding an element at the start :)
//Kya faltu tarika hai; shift me popped item arra hai and unshift me length
console.log(myArr)


//Finally accessing elements from an element: Slicing and Splicing

const oneSlice = []
oneSlice.push(Math.floor(Math.random()*(90-10))+10)
oneSlice.push(Math.floor(Math.random()*(90-10))+10)
oneSlice.push(Math.floor(Math.random()*(90-10))+10)
oneSlice.push(Math.floor(Math.random()*(90-10))+10)
oneSlice.push(Math.floor(Math.random()*(90-10))+10)
oneSlice.push(Math.floor(Math.random()*(90-10))+10)
console.log("Original Array: ", oneSlice)

console.log("Slicing: ",oneSlice.slice(1,4))
console.log("After Slicing Array: ",oneSlice) //Slicing extracts elements from an Array

console.log("Splicing: ", oneSlice.splice(1,4))
console.log("After Splicing Array: ",oneSlice)  //Splicing eliminates that range of elements from the OG array
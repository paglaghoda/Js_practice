//Trying forof-loop

const myArr=["Omkar",19,"Trying to grow!"]
// const myObj = {
//     name: "Omkar",
//     age: 19,
//     tagline: "Trying to grow!"
// } Not for object somehow, will need to confirm this tho
// Update on this guyzzz: For objects aapko For-in loop lagana padega, not For-of!

for (const oneArr of myArr){
    console.log(`Element is ${oneArr}`)
}
for (const oneStr of myArr.find((myString) => myString=="Omkar")){ //this makes zero fucking sense to write
    //what am i even finding? the damn string itself using the string itself, WTF?
    console.log(`Element is ${oneStr}`)
}
/*Output:
Element is Omkar
Element is 19
Element is Trying to grow! */

/*Element is O
Element is m
Element is k
Element is a
Element is r*/

//Now, let's try making maps

const myMap = new Map();
myMap.set("Name","Omkar Sahay")
myMap.set("Age","Nineteen")
myMap.set("Class","Pagal")
console.log(myMap);
console.log(myMap.values())

for (const [keyItr, valItr] of myMap){
    console.log(keyItr, ":", valItr)
}
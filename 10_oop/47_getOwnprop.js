//Sehna sehnaa...kya bole hai tere nainaa..naina naina...kya sach me sath hai rehna...

//a question: can you change the value of pi which you get from Math.pi
let val = Math.PI
console.log(val);

Math.PI = 4
console.log(val)
//Value doesn't change

//Hona hi tha, you should not be able to change the inherent values
//How to know that? that which properties can be changed and stuff?
//Use Object.getOwnPropertyDescriptor Method

console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
// OP: {
//   value: 3.141592653589793,
//   writable: false, //as you can see, it's not writable
//   enumerable: false,
//   configurable: false
// }

let obj1 = {
    name: "Omkar",
    age: 19,
    kutta: "Bhuru"
}

console.log(Object.getOwnPropertyDescriptor(obj1, "kutta"))
// OP: {
//   value: 'Bhuru',
//   writable: true, //as you can see, this is writable
//   enumerable: true,
//   configurable: true
// }

//Now, what if i want to change the writable for a property in my own-made :) object

Object.defineProperty(obj1, 'kutta', {
    writable: false, //writable false matlab, value can't be changed
    enumerable: true //enumerable false matlab, value can't be iterated over
})

console.log(Object.getOwnPropertyDescriptor(obj1, "kutta"))
obj1.kutta="Bhuriya"
for (let [key, val] of Object.entries(obj1)) {
    console.log(`${key}: ${val}`);
}
//OP: as you can see below valye of kutta hasn't changed although we are able to iterate over this
// just becoz the enumerable was 'true' otherwise beta utna bhi nhi ho pata
// name: Omkar
// age: 19
// kutta: Bhuru
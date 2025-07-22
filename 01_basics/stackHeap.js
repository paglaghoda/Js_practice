console.log("How could u leave leave leave...tad dhid tik ta ta ta")
console.log("How could u leave leaveeeeeveeee tadd did tik taaaaa")

//Stack stores Primitive data types
//Heap Stores non-primitive types

//So, basically, agar copy karoge variable ka, of primitive data type then, uska ek COPY update hoga
//and agar array, object ya function ka copy update karoge toh, orginal vali bhi change ho jayegi

//Example

let myName="Omkar";
let userName = myName;
userName = "Omkara";
console.log(myName, userName)
//Output: Omkar Omkara


let details = {
    myName: "Omkar",
    age: 19
}
let newDetails = details;
newDetails.age=20;
console.log(details, newDetails)
//Output: Totally same on both OG and new copy
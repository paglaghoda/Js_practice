//Jalebi baby

//Testing prototype features 
// Just so you know, everything in Js is an object (kind of like java :) ) and everything links to object 
// and what do i mean by that is, Javascript tries very hard to find a method you call, so if it doesn't 
// find it in local scope/context, it searches the parent scope, then grandparent, until it finds it
// and a good way to confirm that is, you can make your own prototypal functions like forEach under prototype
// umbrella all by using .prototype 
//Cool

function myName(username){
    console.log(username)
}

//Now
// console.log(myName("Omkar"));

//Now what if i attach a variable to the function, considering
//Array -> (points to) -> Object (where you can store variables just like an empty object)

myName.herName="Her"
// console.log(myName.herName); //OP: Her 
//Damn, means anything can be a storage location to store data, literally anything, what!!??

function addFive(num){
    this.num=num;
    return this.num+5
}

addFive.prototype.addTenMore=function(num){
    this.num=num;
    return this.num+10;
}

// const one = addFive(100)
// const two = addFive.prototype.addTenMore(one)
// console.log(two);

const three = new addFive(50)
const four = three.addTenMore(addFive(100))
console.log(four);



//Promise to never leave! but u will ik

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Bhai Promise ban gya")
    }, 1000);
    resolve()
}).then(()=> {
    console.log("Promise fulfill go gya")
})

//Basically, dekho, Promise helps you to define a task to be done sometime in future and resolve helps you to
//do nothing but inform that promise has been fulfilled, and you define a task to run if promise has been fulfilled

//But ek problem hai: Agar setTimeout on hai, then resolve pehle ho jarra hai and phir ek sec baad timeout

//Adding parameters to resolve()
let objData = {
    name: "Omkar Sahay",
    age: 19
}
new Promise((resolve, reject)=>{
    let err = false;
    if (!err){
        setTimeout(() => {
        console.log("Promise ka Kaam!")
        resolve(objData);
            }, 1000);
    } else {
        reject("Error: Game over!")
    }

}).then((data)=>{
    console.log(data)
    return data
})
.then((username)=>console.log(username.name))
.catch((err)=>console.log(err))
.finally(()=>console.log("Finally Khatam!"))

//Trying it in a better way

const promFour = new Promise(function(resolve, reject){
    let error = false;
    if (!error){setTimeout(() => {
        resolve("Promise done")
    }, 1000);} else {
        reject("Promise rejected")
    }
})

promFour.finally(()=>console.log("Promise is completed & settled!"))
.then(item=>console.log(item))
.catch(item=>console.log(item))

//Okay, let's try async functions with await method

const promFive = new Promise(function(resolve, reject){
    let error = false;
    if (!error){setTimeout(() => {
        resolve("Promise done")
    }, 1000);} else {
        reject("Promise rejected")
    }
})

async function promiseBhai(){
    try {
        const res = await promFive
        console.log(res);   
    } catch (error) {
        console.log("E:", error)
    }
}

//This async wait with await replaces the .then.catch chain.
//NOTE: You must use try and catch block with async in order it to work

promiseBhai()

//Now replacing the whole promise using async and await

async function promSix(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        let finalRes = await res.json()
        console.log(finalRes.forEach(element => {
            console.log(element.name)
        }));
    } catch (error) {
        console.log("Error: ", error)
    }
}
promSix()

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((item) => item.forEach(element => {
    console.log(element.name)
}))
.catch((err) => console.log("Error:",err))
.finally(()=>console.log("Finally Khatam!"))
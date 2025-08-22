//Chaeen aapko mila, hume toh deewangi mili 

//let's make a class to do certain things: make a constructor, methods
//and then make the something using Functional programming

class database{
    constructor(username, pass, isUserLoggedIn){
        this.username=username
        this.pass=pass
        isUserLoggedIn=isUserLoggedIn
    }

    animateUsername(){
        this.username=`meowed${this.username}`
        return this.username
    }

    protectPass(){
        this.pass=`bhuru${this.pass}pass`
        return this.pass
    }

}

const newUser = new database("Omkar","BhawBhaw", false)
console.log(newUser.username)
console.log(newUser.pass)
console.log(newUser.animateUsername())
console.log(newUser.protectPass());

//Doing this now using Functional programming

function db(username, pass, isUserLoggedIn){
    this.username=username;
    this.pass=pass;
    this.isUserLoggedIn=isUserLoggedIn
}

db.prototype.animateUsername = function(){
        this.username=`meowed${this.username}`
        return this.username
}

db.prototype.protectPass = function(){
        this.pass=`bhuru${this.pass}pass`
        return this.pass
}

const userTwo = new db("Omkar","BhawBhaw", false)
console.log(userTwo.username)
console.log(userTwo.pass)

console.log(userTwo.animateUsername())
console.log(userTwo.protectPass());

console.log(userTwo.username)
console.log(userTwo.pass)

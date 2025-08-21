//Lifafa a good singer

function setUsername(username){
    this.username=username;
    console.log("setUsername Called");
}

function setAllOther(username, age, cgpa){
    setUsername.call(this, username) //.call and this gives the function knowledge about the current function
    //context/scope for it easily understand where to get the value of username from and where to apply to
    this.age=age;
    this.cgpa=cgpa;    
}

const personOne = new setAllOther("Bhuru",4, 9.01)
console.log(personOne);

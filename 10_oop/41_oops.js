//Jab mene khud se kiya ye wada, mere andar ka baccha na mere, andar ka bacha na mere, rahe zinda

let myName="Bhuru";
let myObj = {
    myName: "Omkar",
    age:19,
    address: {
        city: "Rourkela",
        state: "Odisha",
        country: "India"
    },
    CGPA: 8.58,

    displayCGPA: function(){
        console.log(`${this.myName}, kuch bhi bol, maja toh ayya! :)`)
        console.log(this) //Output: Omkar, kuch bhi bol, maja toh ayya! :)
    },

    displayCGP2: ()=>{
        console.log(`${myName}, kuch bhi bol, maja toh ayya! :)`)
        console.log(this) //Output: undefined, kuch bhi bol, maja toh ayya! :) 
        //Dude why undefined here?
        //Okay got it
        //Arrow Functions doesn't have a this. binding so, when you enter .this , its usually searching 
        // for a myName var in the nearby scope of the myObj isntead, let's test this? hehe yes
        //With a global var myName, it as expected prints "Bhuru, kuch bhi bol, maja toh ayya! :)""
    }
}
console.log(myObj.CGPA)
console.log(myObj.displayCGPA())
console.log(myObj.displayCGP2())

function studentDetails(name, age, cgpa){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    return this;
}

const stuOne = new studentDetails("Omkar",19,8.56) //Adding the new keyword creates a new instance and lets
const stuTwo = new studentDetails("Bhuru",4,9.56) // the function act as an class instead
console.log(stuOne.name);
console.log(stuTwo.name);

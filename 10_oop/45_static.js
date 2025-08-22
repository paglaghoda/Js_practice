//Raat adhuri, jaane ki baat puri...baat bhi hai adhuriii...jana bhi hai jarruri

class Person{
    constructor(naam, age, gender){
        this.naam=naam;
        this.age=age;
        this.gender=gender;
    }

    static displayCard(){
        return `Bhuru bhaw`
    }
}

const userOne = new Person("Micheal",19,"M")
// userOne.displayCard() //Error OP: TypeError: userOne.displayCard is not a function

//So, in order to use this function
const cardDetails = Person.displayCard()
console.log(cardDetails);
//OP: Bhuru bhaw

//Hence, static method can only be called upon the class NOT THEIR INSTANCES/OBJECTS

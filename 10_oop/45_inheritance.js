//Bawaaraaaa mann meraaa....jaane na ye kya ho raha hai....mann chala sar fira...apni hi dhun me chala...

class Person{
    constructor(naam, age, gender){
        this.naam=naam;
        this.age=age;
        this.gender=gender;
    }

    displayCard(){
        return `${this.naam} is ${this.age} years old`
    }
}

class Indian extends Person{
    //Chux gye guru
    constructor(naam, bhaiAge, bhaiJaat){
        super(naam)
        this.bhaiAge=bhaiAge;
        this.bhaiJaat=bhaiJaat
    }

    parchiDikhao(){
        return `${this.naam} bhai, ${this.bhaiAge} years old hai`
    }
}

//Creating the objects
const amrOne = new Person("Micheal", 54, "Male")
const indOne = new Indian("Bhuru", 24, "Bihari")
console.log(indOne.parchiDikhao());
console.log(indOne.displayCard());

//Also used Static keyword in order to write a method that can only be used by the class


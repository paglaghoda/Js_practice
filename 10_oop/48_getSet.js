//Dekho ye chand awaraaaa...

class Person{
    constructor(name, age, pass){
        this.name=name;
        this.age=age;
        this.pass=pass;
    }

    //Getter & Setters are used to kind of assigning values to a variable where you don't want people
    //to be able to access it galti se bhi while assigning. Still confused tbh

    get pass(){
        return this._pass+"Bhuru" //Always change the variable name to add a dash here, otw it will
        //give an error: what error? MAX CALL STACK REACHED
        // Basically, you are assigning value to "this.name" at both the constructor & getter, so compiler confused bro
    }

    set pass(value){
        this._pass=value
    }
}

const p1 = new Person("Omkar",19, "Bhuriya")
console.log(p1.pass);

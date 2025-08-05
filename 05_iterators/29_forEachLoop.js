//rukja oh dil deewane...tu ru ru ru

const myArr=["meow","bhaw","dinasour"]

myArr.forEach((eachElement)=> {
    console.log(eachElement.replace("dinasour", "Omkar"))
    }
)
console.log(myArr)

//Basically we can pass functions onto for-Each parameters, 
//Either direct functions without "function" keyword and Function name or just uinsg () => {}
//But haan ek chiz hai, agar alag se function outside scope me define karke pass karre ho
//toh don't ad (), means don't call itself in parameter

function padhoLikho(element){
    console.log(element)
}
myArr.forEach(padhoLikho) //Same thing

myArr.forEach((element, index, arr) => {
    console.log(`The element is ${element} at index ${index} and the total array is ${arr}`)
})

//Chalo, let's try now, Iterating over a Object inside an Array
//like varName = [{},{},{}]

const herArray = [
    {height: "acchi",
        pyar: "sacchi",
        int: "smartymeow",
        hum: "samesame"
    },
    {height: "meow",
        pyar: "bhaw",
        int: "smartymeow",
        hum: "hehe"
    }
]

herArray.forEach( (eachElement) => {
    console.log(`My type: Uski Height ${eachElement.height} and uska pyar ${eachElement.pyar} & Finally Her type: Uski intelligence ${eachElement.int} and humara pyar ${eachElement.hum}`)
})

//Basically crux is, You can easily iterate over each element just by using For-Each :) Damn!
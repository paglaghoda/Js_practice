//Har Sararat sab jaani me, dholniii, ~ chaudhary

//Object banate hai bhaisahab
const pehlaObj={
    meraNaam:"Omkar Sahay",
    meraAge: 19,
    mereBaareMeKuch: "Thoda sa gadha hun hehe"
}
//String and array bhi try karenge
const meraString="Omkar";
const meraArray=["Omkar","meow","bhaw"]

for (const elument in pehlaObj){
    console.log(`Value of ${elument} is : ${pehlaObj[elument]} `)
}
for (const strElument in meraString){
    console.log(meraString[strElument])
}
for (const arrElument in meraArray){
    console.log(`Index ${arrElument} contains ${meraArray[arrElument]}`)
}

const meraDusraMap = new Map();
meraDusraMap.set("meraName","Omkar")
meraDusraMap.set("meraDusraName", "paglaghoda") //Easter egg: if you ever see, paglaghodu, paglaghoda, paglameow, in this World's internet, remember it's me, it was always me, it will always be me :)

console.log(meraDusraMap)

for (const [key, value] in meraDusraMap){//testing for-in loop for Maps
    console.log(key, value)
} //Output is empty becoz Map itself is not iteratable


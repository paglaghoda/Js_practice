//While and do while loop

//Chalo bhai; while loop lagate hai
let herInterestInMe=false;
while (!herInterestInMe){
    console.log("Ek din aapse hum mil jayenge")
    console.log("Socha na tha :)")
    herInterestInMe=true;
}

//do while
let herBeauty="Damn :)";
let herArray= Array.from(herBeauty);
console.log(herArray);
let meow=0;
do {
    process.stdout.write(herArray[meow]+" ");
    meow++;
} while (meow<herArray.length);

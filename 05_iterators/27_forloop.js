//For Loop dekhtey hai dosto

let ex=3;
if (ex<4){
    for (let bodyC=0; bodyC<ex; bodyC++) {
        const exCounter=bodyC; //Matlab this shouldn't work now considering ki const keyword hai and once the value is declared it can't be modified in the next iteration
        //This works coz in every iteration, a NEW SCOPE is created so KIND OF NEW VARIABLE
        console.log(`Good Boy ${exCounter+1}`)
    } 
} else {
    console.log('Fuck Boi Bann gya bhai');
}

//Break and Continue

for (let i=1; i<=5; i++){
    if (i==2){
        break //Break exits the loop
    //OP: Number 1
    }
    console.log(`Number ${i}`)
}
for (let i=1; i<=5; i++){
    if (i==2){
        continue
    } //Skips current iteration and proceed with next one
    /* 
    Number 1
    Number 3
    Number 4
    Number 5
    */
    console.log(`Number ${i}`)
}
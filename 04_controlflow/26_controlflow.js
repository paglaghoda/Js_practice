//Me chand hun ya raakh hun; me dhup hun ya hun leher

//Control flow:

//If, elif, else

let input="143";
if (input=="143"){
    console.log( "I love u")
} else if (input.toLowerCase()=="i hate u"){
    console.log ("Tu hi mera mera mera :)")
} else {
    console.log ("Accha chalta hun, duaoo me yaad rakhna")
}

//Interesting case below
const b = new Boolean(false);
// const b = false;
if (b) {
  console.log("b is truthy"); // "b is truthy"
}

// Okay, this shit here, prints "TRUE" Becoz anything wrapped within the Boolean object that is false, 
// returns True => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#:~:text=This%20is%20because%20all%20objects%2C%20including%20a%20Boolean%20object%20whose%20wrapped%20value%20is%20false%2C%20are%20truthy%20and%20evaluate%20to%20true%20in%20places%20such%20as%20conditional%20statements.%20(See%20also%20the%20boolean%20coercion%20section%20below.)
let myName="Omkar";
let myBetterHalf="Her";

(() => {console.log(`${myName} loves ${myBetterHalf}`)}) ()

//Checking nested functions

function funcOne(){console.log(`Function one called and ${funcTwo()}`)};
function funcTwo(){console.log("Function two called", funcThree())};
function funcThree(){console.log("Function three called")};

funcOne();
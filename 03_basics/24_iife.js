//Oho oh oho oh oh;
//Lagta hai khuda ka koi nek irada hai
// Kya mujhe pyar hai ya

//IIFE: Immediately Invoked Function Expression
//Matlab => Single line function definition plu calling it then and there itself

function myName(name="Om"){
    console.log(`My Name is ${name}`)
}
myName();

//Other way to do this is to warp the function in a paratheneses
(function herName(name="Her"){
    console.log(`Her Name is ${name}`)
}) ();

//Another way is using =>
(() => {console.log('Hatt Chutiye!')}) ();
(herDetails = (herAge) => {console.log(`Hatt ${herAge}`)}) ("Chutiye")

//Another way is to use the => wala function name to call it again later on; otw nameless bhi chodh sakte hai
herDetails(19)
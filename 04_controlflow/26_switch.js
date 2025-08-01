//Tera yakeen hi kyu maine kiya nhiiii

const myCondition=""

//Syntax
switch(myCondition){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

//Program to calculate income tax bracket wise
/* 0 to 2.5lacs => 0%
2.5 lacs to 5 Lacs => 5%
5 to 7.5 Lacs => 7.5%
7.5 to 10 Lacs => 10%
10 to 20 Lacs => 20%
>20Lacs => 2.5% :) */

// const salary = 10111650;
// let totalTax=0;
// switch(salary){
//     case (salary>250000 && salary<500000):
//         totalTax+=(250000*0.05)
//     case (salary>500000 && salary<750000):
//         totalTax+=(250000*0.075)
//     case (salary>750000 && salary<1000000):
//         totalTax+=(250000*0.1)
//     case (salary>1000000 && salary<2000000):
//         totalTax+=(1000000*0.1)
//     case (salary>2000000):
//         totalTax+=(salary-2000000)*0.025
// }

// console.log(`Hey there! Your Total tax based on your Salary of Rs ${salary} per year is Rs${totalTax}. Enjoy bbg!`)

// Program to calculate income tax bracket-wise
/* 0 to 2.5 lacs => 0%
   2.5 lacs to 5 Lacs => 5%
   5 to 7.5 Lacs => 7.5%
   7.5 to 10 Lacs => 10%
   10 to 20 Lacs => 20%
   >20 Lacs => 2.5% */

const salary = 10111650;
let totalTax = 0;

// Use switch(true) to evaluate conditions for tax brackets with fall-through
switch (true) {
    case (salary > 2000000):
        totalTax += (salary - 2000000) * 0.025; // 2.5% for amount > 20 lacs
        // Fall through to include lower brackets
    case (salary > 1000000):
        totalTax += (Math.min(salary, 2000000) - 1000000) * 0.2; // 20% for 10–20 lacs
        // Fall through
    case (salary > 750000):
        totalTax += (Math.min(salary, 1000000) - 750000) * 0.1; // 10% for 7.5–10 lacs
        // Fall through
    case (salary > 500000):
        totalTax += (Math.min(salary, 750000) - 500000) * 0.075; // 7.5% for 5–7.5 lacs
        // Fall through
    case (salary > 250000):
        totalTax += (Math.min(salary, 500000) - 250000) * 0.05; // 5% for 2.5–5 lacs
        // Fall through
    case (salary <= 250000):
        totalTax += 0; // 0% for 0–2.5 lacs
        break; // No need to fall through further
}

console.log(`Hey there! Your total tax based on your salary of Rs ${salary} per year is Rs ${totalTax}. Enjoy bbg!`);
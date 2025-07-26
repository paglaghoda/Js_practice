let myDate = new Date();
console.log(myDate)

const Daty = new Date("2005-08-23T12:03:00")
console.log(Daty.getDay() + 1) //Can add dates and use them as well

const WhatDateToday = Date.now();
console.log(WhatDateToday.toLocaleString())

//Dekho bhai; Date hai object and isme do hi cheez hai: pehla input lena and storing data; dusra using date to get some info from it
// Kya info nikal sakte hai, anything! Jesse ki, i can find the exact weekday, 
// the Timezone difference from UTC, ya phir particular difference of time.now se lekar, difference from a particular specified time

//When entering Months in a Array/String, 1 stands for January whereas
//When entering Month in YYYY, MM, DD, HH, MM, SS format -> 0 stands for January

const someDate = new Date("2005-08-06T13:23:00"); // Using YYYY-MM-DD for clarity
console.log(someDate); //2005-08-06T07:53:00.000Z
console.log(someDate.toUTCString()); //Sat, 06 Aug 2005 07:53:00 GMT
console.log(someDate.toISOString()); //2005-08-06T07:53:00.000Z
console.log(someDate.toJSON()); //2005-08-06T07:53:00.000Z
console.log(someDate.toDateString()); //Sat Aug 06 2005
console.log(someDate.toLocaleString()); //6/8/2005, 1:23:00 pm
console.log(someDate.toLocaleDateString()); //6/8/2005
console.log(someDate.toLocaleTimeString()); //1:23:00 pm
console.log(someDate.getTimezoneOffset()); //-330

//Options inside a method as well on how you want to display the Date and Time details
function getFormattedDateTime(locale = 'en-IN', options = {}) {
  const todayDate = new Date();
  return todayDate.toLocaleString(locale, options);
}
//Usage of this function like thing, Thanks to Groky

// 1. Default formatting (date and time in IST)
console.log(getFormattedDateTime());
// Output (example, based on current time): "26/7/2025, 12:37:00 PM"

// 2. Date only
console.log(getFormattedDateTime('en-IN', { dateStyle: 'full' }));
// Output: "Saturday, 26 July 2025"

// 3. Time only
console.log(getFormattedDateTime('en-IN', { timeStyle: 'medium' }));
// Output: "12:37:00 PM"

// 4. Custom date and time format
console.log(getFormattedDateTime('en-IN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
}));
// Output: "Saturday, 26 July 2025, 12:37:00 PM"
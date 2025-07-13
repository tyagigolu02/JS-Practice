"use strict";

console.log("Hello, World!");
var fname = "Deepanshu";// var is function scoped
var lname = "Tyagi";// kitni bhi baar use kr skte hain
console.log(fname + lname);

fname = "Golu";
console.log(fname + lname);

// lName = "don"; not defined
var lName = "Don";
console.log(fname + lName);

let lName2 = "Don2"; // let is block scoped
console.log(fname + lName2);
{
    let lName2 = "Don3";// let use krke ek hi baar declare kr skte hain
    console.log(fname + lName2);

    console.log(fname + lName);
}

const pi = 3.14;
console.log(pi);
//pi = 3.15; // TypeError: Assignment to constant variable
console.log(pi);



// const ------> ko constant ke liye use krte hain
// let -------> ko block scope ke liye use krte hain
// var -------> ko function scope ke liye use krte hain

/*--------------------------------------------------------------------------------------------------------*/

let fnaam = "Deepanshu      ";
let lnaam = "Tyagi";
console.log(fnaam[0] + lnaam[0]); // D + T
console.log(fnaam.length + lnaam.length); // 20
console.log(fnaam.toUpperCase() + lnaam.toUpperCase()); // DEEPANSHU + TYAGI
console.log(fnaam.toLowerCase() + lnaam.toLowerCase()); // deepanshu + tyagi
console.log(fnaam.indexOf("p")); // 2
console.log(fnaam.lastIndexOf("p")); // 5
console.log(fnaam.charAt(2)); // e
console.log(fnaam.slice(0, 4)); // Deep
console.log(fnaam.trim()); // Deepanshu
console.log(fnaam.replace("Deepanshu", "Golu") + lnaam); // Golu      Tyagi
console.log(fnaam.split("a")); // [ 'Deep', 'nshu      ' ]
console.log(fnaam.concat(lnaam)); // Deepanshu      Tyagi
console.log(fnaam.includes("Deep")); // true
console.log(fnaam.includes("deep")); // false



/* toUpperCase() ---> converts the string to uppercase
   toLowerCase() ---> converts the string to lowercase
   indexOf() ---> returns the index of the first occurrence of a substring
   lastIndexOf() ---> returns the index of the last occurrence of a substring
   charAt() ---> returns the character at a specified index
   slice() ---> extracts a section of a string and returns it as a new string
   trim() ---> removes whitespace from both ends of a string
   replace() ---> replaces a specified value with another value in a string
   split() ---> splits a string into an array of substrings
   concat() ---> joins two or more strings together
   includes() ---> checks if a string contains a specified substring
*/

/*--------------------------------------------------------------------------------------------------------*/


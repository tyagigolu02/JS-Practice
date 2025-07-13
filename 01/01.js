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
console.log("   ");

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
console.log("   ");

/*--------------------------------------------------------------------------------------------------------*/

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("   ");

let num1 = 10;
let num2 = "10";
console.log(num1 > num2); // false

console.log(num1 == num2); // true
console.log(num1 === num2); // false

// == checks for value equality
// === checks for value and type equality

console.log(num1 != num2); // false
console.log(num1 !== num2); // true
// != checks for value inequality
// !== checks for value and type inequality
console.log("   "); // false

/*--------------------------------------------------------------------------------------------------------*/
//falsy values in JavaScript
// 0, "", null, undefined, NaN, false

/*--------------------------------------------------------------------------------------------------------*/
let age = 20;
let drink;
if (age >= 18) {
    drink = "Beer";
}
else {
    drink = "Juice";
}
console.log(drink); // Beer

console.log("   ");

let Age = 20;
let Drink = (Age >= 18) ? "daru" : "paani"; // Ternary operator
console.log(Drink); // daru
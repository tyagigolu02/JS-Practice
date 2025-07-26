// //Synchronous Programming ----> single threaded
// console.log("dekho bhai ab mja aayega");

// for(let i = 0;i<1000;i++){
//     console.log(i);
// }
// console.log("khatm tata bye bye gya");



// // setTimeout() -- sara code run hone ke baad ye chij run hogi
// console.log("start ho gya bhago");
// function hello(){
//     console.log("hello bhaio");
// }
// setTimeout(hello, 10000);
// console.log("bnd kro ");

// //setInterval() -- hr 1 sec m kaam krta hai
// setInterval(()=>{
//     console.log(Math.random());
// }, 1000);

// //undefined callback
// function myFun(callback){
//     console.log("kuch to krra hai bhai");
//     callback();
// }
// function myFun1(){
//     console.log("kych aur bhi krra hai");
// }
// myFun(myFun1);

//callbacks , callback hell--pyramid of dom
//Asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {  //setTimeout using callback hell(nested callback)
//     heading1.textContent = "Hello World.";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Hello World.";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Hello World.";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Hello World.";
//                 heading4.style.color = "orange";
//                 setTimeout(() => {
//                     heading5.textContent = "Hello World.";
//                     heading5.style.color = "yellow";
//                     setTimeout(() => {
//                         heading6.textContent = "Hello World.";
//                         heading6.style.color = "pink";
//                         setTimeout(() => {
//                             heading7.textContent = "Hello World.";
//                             heading7.style.color = "green";
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            } else {
                onFailureCallback();
            }
        } else {
            console.log("khalli hai bhai");
        }
    }, time)
};


// callback hell--pyramid of dom
changeText(heading1, "HELLO WORLD", "yellow", 1000, () => {
    changeText(heading2, "HELLO WORLD", "red", 1000, () => {
        changeText(heading3, "HELLO WORLD", "blue", 1000, () => {
            changeText(heading4, "HELLO WORLD", "green", 1000, () => {
                changeText(heading5, "HELLO WORLD", "orange", 1000, () => {
                    changeText(heading6, "HELLO WORLD", "pink", 1000, () => {
                        changeText(heading7, "HELLO WORLD", "violet", 1000, () => {

                        }, () => { console.log("Error in changing text for heading6") });
                    }, () => { console.log("Error in changing text for heading5") });
                }, () => { console.log("Error in changing text for heading4") });
            }, () => { console.log("Error in changing text for heading3") });
        }, () => { console.log("Error in changing text for heading2") });
    }, () => { console.log("Error in changing text for heading1") });
});

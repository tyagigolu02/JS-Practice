//  //keypress event
//  const body = document.querySelector("body");
//  body.addEventListener("keypress",(event)=>{
//      console.log(event);
//  })

// //mouseover & mouseleave event
// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.querySelector(".btn");
//     btn.addEventListener("mouseover", () => {
//         console.log("mouseover event occurred !!!");
//     });
//     btn.addEventListener("mouseleave", () => {
//         console.log("mouseleave event occurred !!!");
//     }); 
// });


// //event bubbling/propogation

const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const grandParent = document.querySelector(".grandParent");
const body = document.querySelector("body");

// child.addEventListener("click",()=>{
//     console.log("child ko ched diya bhai tumne")
// });
// parent.addEventListener("click",()=>{
//     console.log("parent ko ched diya bhai tumne")
// });
// grandParent.addEventListener("click",()=>{
//     console.log("grandParent ko ched diya bhai tumne")
// });
// body.addEventListener("click",()=>{
//     console.log("body ko ched diya bhai tumne")
// });


// //capturing event

// child.addEventListener(
//     "click",
//     ()=>{
//     console.log("child ko ched diya bhai tumne capture krke")
//     },
//     true
// );
// parent.addEventListener(
//     "click",
//     ()=>{
//     console.log("parent ko ched diya bhai tumne")
//     },
//     true
// );
// grandParent.addEventListener(
//     "click",
//     ()=>{
//     console.log("grandParent ko ched diya bhai tumne")
//     },
//     true
// );
// body.addEventListener(
//     "click",
//     ()=>{
//     console.log("body ko ched diya bhai tumne")
//     },
//     true
// );

// //event delegation -----> agr aap grandParent pe event add krte ho aur child pr click krke hai to bhi event trigger hoga
// grandParent.addEventListener("click", (event) => {
//     console.log(event.target.className);
// });



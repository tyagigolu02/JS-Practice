// //Promises -- future value of an async operation
// // Example of a simple promise
// console.log("kaam suru kro");
// const bucket = ['coffee', 'chips', 'fruits', 'salt', 'rice'];

// const friedRice = new Promise((resolve, reject) => {
//     if (bucket.includes("salt") && bucket.includes("coffee") && bucket.includes("chips")) {
//         resolve({ value: "Fried Rice" });
//     } else {
//         reject("nhi bn payega bhai tujhse");
//     }
// })

// //promise

// friedRice.then((myFriedRice) => {
//     console.log("bn gye bhai kha le.....", myFriedRice);
// }).catch((error) => {
//     console.log(error);
// });


// for(let i =0;i<10;i++){
//     console.log(i);
// }

// console.log("bs kr bhai kitna kaam krega");

// //function returning promise
// function riceProduct(){
//     const bucket = ['coffee', 'chips', 'fruits', 'salt', 'rice'];
//     return new Promise((resolve, reject) => {
//         if (bucket.includes("salt") && bucket.includes("coffee") && bucket.includes("chips")) {
//             resolve({ value: "Fried Rice" });
//         } else {
//             reject("nhi bn payega bhai tujhse");
//         }
//     })
// }

// riceProduct().then((myFriedRice) => {
//     console.log("bn gye bhai kha le.....", myFriedRice);
//  }).catch((error) => {
//     console.log(error);
//  });


// //promise && setTimeout

//  function riceProduct(){

//      return new Promise((resolve,reject)=>{
//      const value = ;
//      setTimeout(()=>{
//         if(value){
//             resolve();
//         }else{
//             reject();
//         }
//      },2000)
// })
//  }

//  riceProduct()
//  .then(()=>{console.log("ho to gya ... ")})
//  .catch(()=>{console.log("tujhse na ho payega....")})



//Promise.resolve --->  promise deta hai
//Promise.chaining

//then ----> promise return krta hai





// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");


// function changeText(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(element){
//               element.textContent = text;
//               element.style.color = color;
//               resolve();
//             }else{
//               reject("element not found");
//             }
//           },time)
//     })  
//   }

// changeText(heading1, "one", "red", 1000)
//   .then(()=>changeText(heading2, "two", "purple", 1000))
//   .then(()=>changeText(heading3, "three", "green", 1000))
//   .then(()=>changeText(heading4, "four", "orange", 1000))
//   .then(()=>changeText(heading5, "four", "orange", 1000))
//   .then(()=>changeText(heading6, "four", "orange", 1000))
//   .then(()=>changeText(heading7, "four", "orange", 1000))
//   .then(()=>changeText(heading8, "four", "orange", 1000))
//   .then(()=>changeText(heading9, "four", "orange", 1000))
//   .then(()=>changeText(heading10, "four", "orange", 1000))
//   .catch((error)=>{
//       alert(error);
//   })



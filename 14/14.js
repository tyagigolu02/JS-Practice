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
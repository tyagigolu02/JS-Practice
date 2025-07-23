// //  Event
// const btn = document.querySelector(".btn-headline");
// // btn.addEventListener("click",function(){
// //     console.log("kyu click krta hai bee pitega kya ");
// // });

// btn.addEventListener("click",()=>{
//     console.log("kyu click krta hai bee pitega kya ");
//     //this keyword
//     console.log(this);//in arrow fun ---> window & in normal fun ---> this item
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const body = document.querySelector("body");
//     const btn = document.querySelectorAll(".my-buttons button");
//     for(let bts = 0; bts < btn.length; bts++){
//         btn[bts].addEventListener("click", function(){
//             if(bts == 1){
//                 body.style.backgroundColor = "red";
//             }else if(bts == 2){
//                 body.style.backgroundColor = "green";
//             }else if(bts == 3){
//                 body.style.backgroundColor = "yellow";
//             }
//         });
//     }
// });

//event object

// document.addEventListener("DOMContentLoaded", function() {
//     const firstButton = document.querySelector("#one");
//     if (firstButton) {
//         firstButton.addEventListener("click", function(event) {
//             console.log(event);
//         });
//     }
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const allButtons = document.querySelectorAll(".my-buttons button");
//     for (let button of allButtons) {
//         button.addEventListener("click", function(e) {
//             console.log(e.currentTarget.textContent); // or use target
//         });
//     }
// });


// agr delay dena hai to loop se de skte hai
document.addEventListener("DOMContentLoaded",function(){
const body = document.querySelector("body");
const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach(button => {
    button.addEventListener("click",function(){
    if(button.id == "one"){
        body.style.background = "yellow";
        this.style.background = "grey";
    }else if(button.id == "two"){
        body.style.background = "beige";
        this.style.background = "skyblue";  
    }else if(button.id == "three"){
        body.style.background = "blueviolet";
        this.style.background = "red";
    }
    })
});
})


//DOM ---> Document Object Model
// console.log(document);

// //use of getElementById
// const mainHeading = document.getElementById("main-heading");

// //use of querySelector
// const header = document.querySelector(".header");


// //change text -----> innerText(render text) & textContent(+ hide text)
//  mainHeading.textContent = "This is something else";

//  //change the style 
//  mainHeading.style.color = "blue";

//  //get & set attributes
//  const link = document.querySelector("a");
//  console.log(link.getAttribute("class"));
//  link.setAttribute("href","https://google.com");

// //get multiple elements using getAttributes by class name / querySelectorAll
// const navItems = document.querySelectorAll(".nav-item"); //give nodeList
// // const navItems = document.getElementsByClassName("nav-item");//give HTML collection
// navItems[2];
const navItems = document.getElementsByTagName("a");

//loop
for(let i=0;i<navItems.length;i++){
    const navItem = navItems[i];
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}
const headerBtn = document.querySelector(".btn-headline");
headerBtn.style.background = "lightgreen";
headerBtn.style.borderRadius = "20px";


//innerHTML

const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
headline.innerHTML = "<h1> BDL TO DI BHAI AUR KYA BACCHE KI JAAN LEGA </h1>";
headline.innerHTML += "<button class=\"btn\"> Learn More </button>";
console.log(headline);

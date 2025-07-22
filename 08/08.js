// //DOM ---> Document Object Model
// // console.log(document);

// // //use of getElementById
// // const mainHeading = document.getElementById("main-heading");

// // //use of querySelector
// // const header = document.querySelector(".header");


// // //change text -----> innerText(render text) & textContent(+ hide text)
// //  mainHeading.textContent = "This is something else";

// //  //change the style 
// //  mainHeading.style.color = "blue";

// //  //get & set attributes
// //  const link = document.querySelector("a");
// //  console.log(link.getAttribute("class"));
// //  link.setAttribute("href","https://google.com");

// // //get multiple elements using getAttributes by class name / querySelectorAll
// // const navItems = document.querySelectorAll(".nav-item"); //give nodeList
// // // const navItems = document.getElementsByClassName("nav-item");//give HTML collection
// // navItems[2];
// const navItems = document.getElementsByTagName("a");

// //loop
// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// const headerBtn = document.querySelector(".btn-headline");
// headerBtn.style.background = "lightgreen";
// headerBtn.style.borderRadius = "20px";


// //innerHTML

// const headline = document.querySelector(".headline");
// // console.log(headline.innerHTML);
// headline.innerHTML = "<h1> BDL TO DI BHAI AUR KYA BACCHE KI JAAN LEGA </h1>";
// headline.innerHTML += "<button class=\"btn\"> Learn More </button>";
// console.log(headline);


const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");
// sectionTodo.classList.toggle("bg-dark");
// console.log(sectionTodo.classList)

// const header = document.querySelector(".header");
// header.classList.toggle("bg-dark");
// console.log(header.classList);

const todoList = document.querySelector(".todo-list");
// // todoList.innerHTML = "<li>New ToDo</li>";
// todoList.innerHTML += "<li>New ToDo</li>";
// todoList.innerHTML += "<li>Teach Students</li>";

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Teachers");
// newTodoItem.textContent = "Teach Teachers";
// // newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);//at starting
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// //add before & after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Teachers";
// todoList.before(newTodoItem);
// //same as after


//insertAdjacentHTML(where,html)
/* afterend , beforeend , afterbegin , beforebegin ;
todoList.insertAdjacentHTML("beforeend","<li>Teach Teachers</li>")  */

//clone Nodes ---> cloneNodes(true)


//static list vs live list

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item-6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(ul);


// querySelectorAll ----> static list denge
// getElementBySomething ---> live list denge
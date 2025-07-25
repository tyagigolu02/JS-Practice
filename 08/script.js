const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    newLi.textContent = newTodoText;
    const newLiInnerHTML = `<span class="todo-text">${newTodoText}</span>
          <button class="btn-done btn">Done</button>
          <button class="btn-delete btn">Delete</button>`;
    newLi.innerHTML = newLiInnerHTML;
    todoList.appendChild(newLi);
    todoInput.value = "";
});
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-done")){
        const todoText = e.target.previousElementSibling;
        todoText.style.textDecoration = "line-through";
        todoText.style.color = "gray";
    } else if(e.target.classList.contains("btn-delete")){
        const li = e.target.parentElement;
        li.remove();
    }
});
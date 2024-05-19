function loadTodos(){
    //This function will load the todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList": []};
    console.log(todos);
    return todos;
}
function addTodoToLocalStorage(todoText){
    const todos= loadTodos();
    todos.todoList.push(todoText)
    localStorage.setItem("todos",JSON.stringify(todos))
}

function appendTodoInHtml(todoText){
    const todoList =document.getElementById("todoList")

    const todo = document.createElement("li")

    todo.textContent = todoText;
    todoList.appendChild(todo)
}

document.addEventListener("DOMContentLoaded", ()=>{

  const todoInput = document.getElementById("todoinput")

  const submitButton = document.getElementById("addTodo")

  const todoList =document.getElementById("todoList")
    
  submitButton.addEventListener("click", (event)=>{
    const todoText = todoInput.value;
    if(todoText == '' ){
        alert("Please enter a todo")
    }else{
        addTodoToLocalStorage(todoText);
        appendTodoInHtml(todoText)
        todoInput.value = '';
    }
  })

  todoInput.addEventListener("change", (event) =>{
    // This call back method if fired everytime there is a change in the input tag
    // console.log("Something Change",event.target.value);
    const todoText = event.target.value;

    event.target.value = todoText.trim();
    console.log(event.target.value);
  })

  const todos =  loadTodos();

  todos.todoList.array.forEach(todo =>{
    const newTodoItem = document.createElement("li")
    newTodoItem.textContent = todo;
    todoList.appendChild(newTodoItem)
  })
})


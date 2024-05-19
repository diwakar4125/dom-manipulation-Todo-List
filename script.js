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

document.addEventListener("DOMContentLoaded", ()=>{

  const todoInput = document.getElementById("todoinput")

  const submitButton = document.getElementById("addTodo")
    
  submitButton.addEventListener("click", (event)=>{
    const todoText = todoInput.value;
    if(todoText == '' ){
        alert("Please enter a todo")
    }else{
        addTodoToLocalStorage(todoText);
    }
  })

  todoInput.addEventListener("change", (event) =>{
    // This call back method if fired everytime there is a change in the input tag
    // console.log("Something Change",event.target.value);
    const todoText = event.target.value;

    event.target.value = todoText.trim();
    console.log(event.target.value);
  })

   loadTodos();
})


const todoApi = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(res => res.json())
    .then(data => displayTodo(data))
}

const displayTodo=(todo)=>{
    const todoContainer = document.getElementById("todoContainer")
    todoContainer.innerHTML = ""
    todo.forEach(todos =>{
        const todoCard = document.createElement("div")
        todoCard.innerHTML = `
        <div class="todo-card">
        <div class="todo-left">
          <div>
            <h3>${todos.title}</h3>
          </div>
        </div>

        <div class="todo-actions">
          ${todos.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}
        </div>
      </div>
        `
        todoContainer.appendChild(todoCard)

    })
}

todoApi()
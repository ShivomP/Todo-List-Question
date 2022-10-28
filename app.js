const list = document.querySelector(".list")
const input = document.querySelector("input")

let todoList = []
let inputValue = ""
let counter = 0

function inputChange(event){
  inputValue = event.target.value
}

function addTodo(){
  if(!inputValue){
    return
  }
  todoList.push({
    id: counter++,
    task: inputValue
  })
  renderTodos()
  input.value = ""
  inputValue = ""
}


function deleteTodo(id){
  todoList = todoList.filter((todo) => todo.id !== id)
  renderTodos()
}

function renderTodos(){
  list.innerHTML = todoList.map(element => 
    `<li>
      ${element.task}
      <button class="todo__delete" onclick="deleteTodo(${element.id})">
        x
      </button>
    </li>`).join("")
}
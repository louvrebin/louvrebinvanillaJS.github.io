const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function toggleTodo(event) {
  const li = event.target;
  li.classList.toggle("completed");

  // 상태 업데이트
  const id = parseInt(li.id);
  const target = todos.find((todo) => todo.id === id);
  if (target) {
    target.completed = !target.completed;
    saveTodos();
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  if (newTodo.completed) {
    li.classList.add("completed");
  }

  li.innerText = newTodo.text;
  li.addEventListener("click", toggleTodo);

  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("delete-btn");
  button.addEventListener("click", deleteTodo);

  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    completed: false,
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

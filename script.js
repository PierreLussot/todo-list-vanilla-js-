//SELECTEUR

const todoImpute = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);

//FONCTIONS

function addTodo(e) {
  e.preventDefault();
  //creation d'unne div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //créer le li
  const newTodo = document.createElement("li");
  //ajoute la valeur du texte dans la list
  newTodo.innerText = todoImpute.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Bouton Check
  const completedButtom = document.createElement("buttom");
  completedButtom.innerHTML = '<li class="fas fa-check"></li>';
  completedButtom.classList.add("complete-btn");
  todoDiv.appendChild(completedButtom);
  //Bouton Supprmer
  const trashButton = document.createElement("buttom");
  trashButton.innerHTML = '<li class="fas fa-trash"></li>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Ajouter notre todo a notre todo list
  todoList.appendChild(todoDiv);
  //reset linput par ue valeur vide
  todoImpute.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  //Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(e.target.value);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;
    }
  });
}

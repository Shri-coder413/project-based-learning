const inp = document.querySelector("#input-box");
const add = document.querySelector("#addBtn");
const remove = document.querySelector("#delete");
const list = document.querySelector("ul");

let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

if (!savedTodos || savedTodos.length === 0) {
  savedTodos = [
    { text: "Wake up on time", done: false },
    { text: "Drink water", done: false },
    { text: "Focus on one important task", done: false },
    { text: "Practice coding", done: false },
    { text: "Sleep on time", done: false }
  ];

  localStorage.setItem("todos", JSON.stringify(savedTodos));
}


add.addEventListener("click", function () {
  let task = inp.value.trim();

  if (task !== "") {
    let li = document.createElement("li");
    let check = document.createElement("input");

    check.type = "checkbox";
    check.addEventListener("change", saveTodos);

    let text = document.createElement("span");
    text.textContent = task;

    li.appendChild(check);
    li.appendChild(text);
    list.appendChild(li);

    inp.value = "";

    saveTodos();
  }
});


remove.addEventListener("click", function () {
  let checkboxes = list.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box) => {
    if (box.checked) {
      box.parentElement.remove();
    }
  });

  saveTodos();
});


const selectAll = document.querySelector("#selectAll");

selectAll.addEventListener("click", function () {
  let checkboxes = list.querySelectorAll('input[type="checkbox"]');
  let allChecked = true;

  checkboxes.forEach((box) => {
    if (!box.checked) allChecked = false;
  });

  checkboxes.forEach((box) => {
    box.checked = !allChecked;
  });

  saveTodos();
});


function saveTodos() {
  let todos = [];

  list.querySelectorAll("li").forEach((li) => {
    todos.push({
      text: li.querySelector("span").textContent,
      done: li.querySelector("input").checked
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
let inp = document.querySelector("#input-box");
let add = document.querySelector("#addBtn");
let remove = document.querySelector("#delete");
let list = document.querySelector("ul");

// Add task
add.addEventListener("click", function () {
  let task = inp.value.trim();

  if (task !== "") {
    let li = document.createElement("li");

    // create checkbox
    let check = document.createElement("input");
    check.type = "checkbox";

    // add checkbox + text
    li.appendChild(check);
    li.append(task);

    list.appendChild(li);
    inp.value = ""; // clear input
  }
});

// Remove selected tasks
remove.addEventListener("click", function () {
  let checkboxes = list.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box) => {
    if (box.checked) {
      box.parentElement.remove();
    }
  });
});

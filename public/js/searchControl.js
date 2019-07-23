const searchTodoButton = document.querySelectorAll("#jsSearchTodoBtn");
const searchTodoSpan = document.querySelectorAll("#jsSearchTodoSpan");
const searchTodoInput = document.querySelectorAll("#jsSearchTodoInput");
const searchTodoDelBtn = document.querySelectorAll("#jsSearchDelBtn");
const searchTodoUpdateBtn = document.querySelectorAll("#jsSearchTodoUpdateBtn");
const searchTodoSetting = document.querySelector("#jsSearchSetting");

function handleSearchSettingClick() {
  searchTodoButton.forEach(button => {
    button.classList.toggle("hidden");
  });
  searchTodoSpan.forEach(spans => {
    spans.classList.toggle("hidden");
  });
  searchTodoInput.forEach(input => {
    input.classList.toggle("hidden");
  });
  searchTodoDelBtn.forEach(delbtn => {
    delbtn.classList.toggle("hidden");
  });
  searchTodoUpdateBtn.forEach(btn => {
    btn.classList.toggle("hidden");
  });
}

function init() {
  searchTodoSetting.addEventListener("click", handleSearchSettingClick);
  searchTodoButton.forEach(every => {
    if (every.className.split("abcdefg")[1] === "true") {
      every.innerHTML = " ✅";
    } else {
      every.innerHTML = "❌";
    }
  });
}

init();

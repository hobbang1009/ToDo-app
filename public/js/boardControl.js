const boardNewBtn = document.querySelector("#jsBoardNewBtn");
const boardListBtn = document.querySelector("#jsBoardListBtn");
const boardSettingBtn = document.querySelector("#jsBoardSettingBtn");
const boardListSpan = document.querySelectorAll("#jsBoardListSpan");
const boardCheckBox = document.querySelectorAll(".todoCheckBox");
const boardDeleteBox = document.querySelectorAll(".todoDeleteBox");
const boardUpdateInput = document.querySelectorAll("#todoUpdateInput");
const boardUpdateSubmit = document.querySelectorAll("#todoUpdateSubmit");
const boardPagingContainer = document.querySelector("#jsBoardPagingContainer");
const boardNewFormContainer = document.querySelector(
  "#jsBoardNewFormContainer"
);
const todoCheckBox = document.querySelectorAll(".todoCheckBox");

function handleBoardNewClick() {
  boardListSpan.forEach(span => {
    span.classList.add("hidden");
  });
  boardCheckBox.forEach(check => {
    check.classList.add("hidden");
  });
  boardDeleteBox.forEach(del => {
    del.classList.add("hidden");
  });
  boardUpdateInput.forEach(input => {
    input.classList.add("hidden");
  });
  boardUpdateSubmit.forEach(submit => {
    submit.classList.add("hidden");
  });
  boardPagingContainer.classList.add("hidden");
  boardNewFormContainer.classList.remove("hidden");
}

function handleBoardListClick() {
  boardListSpan.forEach(span => {
    span.classList.remove("hidden");
  });
  boardCheckBox.forEach(check => {
    check.classList.remove("hidden");
  });
  boardDeleteBox.forEach(del => {
    del.classList.add("hidden");
  });
  boardUpdateInput.forEach(input => {
    input.classList.add("hidden");
  });
  boardUpdateSubmit.forEach(submit => {
    submit.classList.add("hidden");
  });
  boardPagingContainer.classList.remove("hidden");
  boardNewFormContainer.classList.add("hidden");
}

function handleBoardSettingClick() {
  boardListSpan.forEach(span => {
    span.classList.add("hidden");
  });
  boardCheckBox.forEach(check => {
    check.classList.add("hidden");
  });
  boardDeleteBox.forEach(del => {
    del.classList.remove("hidden");
  });
  boardUpdateInput.forEach(input => {
    input.classList.remove("hidden");
  });
  boardUpdateSubmit.forEach(submit => {
    submit.classList.remove("hidden");
  });
  boardNewFormContainer.classList.add("hidden");
}

function init() {
  boardNewBtn.addEventListener("click", handleBoardNewClick);
  boardListBtn.addEventListener("click", handleBoardListClick);
  boardSettingBtn.addEventListener("click", handleBoardSettingClick);
  todoCheckBox.forEach(checkBox => {
    if (checkBox.value.split("/")[1] === "true") {
      checkBox.innerHTML = "✅";
    }
  });
}

init();

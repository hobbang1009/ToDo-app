//boards
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
//

//todo Board Count
const todoBoardPages = document.querySelectorAll(".jsBoardPageCount");
const todoBoardPage1 = document.querySelector("#jsBoardPageCount1");
const todoBoardPage2 = document.querySelector("#jsBoardPageCount2");
const todoBoardPage3 = document.querySelector("#jsBoardPageCount3");
const todoBoardPage4 = document.querySelector("#jsBoardPageCount4");
const todoBoardPage5 = document.querySelector("#jsBoardPageCount5");
const todoBoardCount = document.querySelector("#jsTodoBoardCount");
const todoBoardContainer = document.querySelector("#jsBoardPagingContainer");

//function start

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
  //board Count
  //board list
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

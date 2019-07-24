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
const todoPagingContainer = document.querySelector("#jsBoardPagingContainer");
const todoPagingTotalPage = document.querySelector("#jsBoardPageTotal");
//

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

function pageCountroller() {
  const pageQuery = parseInt(window.location.search.split("page=")[1]);
  const totalPage = parseInt(todoPagingTotalPage.innerHTML);
  let i = 0;
  while (i < totalPage) {
    if (i < 5) {
      const aTag = document.createElement("a");
      todoPagingContainer.appendChild(aTag);
      aTag.innerHTML = i + 1;
      aTag.href = `/?page=${i}`;
      aTag.id = `page${i + 1}todo`;
      if (2 < pageQuery) {
        aTag.innerHTML = pageQuery - 1 + i;
        aTag.href = `/?page=${pageQuery - 2 + i}`;
        aTag.id = `pageTodo${pageQuery - 1 + i}`;
      }
    }
    i++;
  }
  if (pageQuery) {
    const aTags = document.querySelector(`#pageTodo${pageQuery + 1}`);
    aTags.style.color = "blue";
    aTags.style.fontWeight = "bold";
    if (pageQuery >= totalPage - 2) {
      const aTag1 = document.querySelector(`#pageTodo${pageQuery + 3}`);
      aTag1.classList.add("hidden");
    }
    if (pageQuery >= totalPage - 1) {
      const aTag1 = document.querySelector(`#pageTodo${pageQuery + 2}`);
      const aTag2 = document.querySelector(`#pageTodo${pageQuery + 3}`);
      aTag1.classList.add("hidden");
      aTag2.classList.add("hidden");
    }
  }
}

//

function init() {
  //board Count
  pageCountroller();
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

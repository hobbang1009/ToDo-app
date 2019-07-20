const pictureEdit = document.querySelector("#jsPictureEdit");
const pictureForm = document.querySelector("#jsPictureEditForm");
const pictureButton = document.querySelector("#jsPictureEditButton");
const profileEditSpan = document.querySelector("#jsProfileEditSpan");
const profileEditForm = document.querySelector("#jsProfileEditForm");
const profileEditButton = document.querySelector("#jsProfileEditButton");
const profileEditDelete = document.querySelector("#jsProfileEditDelete");

function handleClick() {
  pictureForm.classList.toggle("hidden");
  pictureButton.classList.toggle("hidden");
  pictureEdit.classList.toggle("hidden");
}

function handleButtonClick() {
  pictureForm.classList.toggle("hidden");
  pictureButton.classList.toggle("hidden");
  pictureEdit.classList.toggle("hidden");
}

function handleEditSpanClick() {
  profileEditForm.classList.toggle("hidden");
  profileEditButton.classList.toggle("hidden");
  profileEditSpan.classList.toggle("hidden");
  profileEditDelete.classList.toggle("hidden");
}

function handleEditButtonClick() {
  profileEditForm.classList.toggle("hidden");
  profileEditButton.classList.toggle("hidden");
  profileEditSpan.classList.toggle("hidden");
  profileEditDelete.classList.toggle("hidden");
}

function init() {
  pictureEdit.addEventListener("click", handleClick);
  pictureButton.addEventListener("click", handleButtonClick);
  profileEditSpan.addEventListener("click", handleEditSpanClick);
  profileEditButton.addEventListener("click", handleEditButtonClick);
}

init();

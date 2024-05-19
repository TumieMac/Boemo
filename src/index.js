function completeSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}
let formElement = document.querySelector("#search-forms");
formElement.addEventListener("submit", completeSearch);

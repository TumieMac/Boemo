function refreshWeather(response) {
  console.log(response);
  let weatherElement = document.querySelector("#temperature-value");
  let temp = Math.round(response.data.temperature.current);
  weatherElement.innerHTML = temp;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "f37fb7d4t69307f3b44bfe4a6o94f2e6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function completeSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");

  searchCity(searchInputElement.value);
}
let formElement = document.querySelector("#search-forms");
formElement.addEventListener("submit", completeSearch);

searchCity("Pietermaritzburg");

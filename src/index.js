function refreshWeather(response) {
  console.log(response);
  let weatherElement = document.querySelector("#temperature-value");
  let temp = Math.round(response.data.temperature.current);
  weatherElement.innerHTML = temp;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humid");
  humidityElement.innerHTML = response.data.temperature.humidity + "%";

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed + "km/h";

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = date.getHours();
  console.log(minutes);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
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

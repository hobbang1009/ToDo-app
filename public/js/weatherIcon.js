const weatherIconText = document.querySelector("#jsWeatherIconText");
const weatherIcon = document.querySelector("#jsWeatherIcon");

function chooseIcon() {
  if (weatherIconText.innerText === "partly-cloudy-day") {
    weatherIcon.className = "fas fa-cloud-sun";
  }
  if (weatherIconText.innerText === "cloudy") {
    weatherIcon.className = "fas fa-cloud";
  }
  if (weatherIconText.innerText === "clear-day") {
    weatherIcon.className = "far fa-sun";
  }
  if (weatherIconText.innerText === "clear-night") {
    weatherIcon.className = "far fa-moon";
  }
  if (weatherIconText.innerText === "partly-cloudy-night") {
    weatherIcon.className = "fas fa-cloud-moon";
  }
  if (weatherIconText.innerText === "rain") {
    weatherIcon.className = "fas fa-cloud-showers-heavy";
  }
}

function init() {
  chooseIcon();
}

init();

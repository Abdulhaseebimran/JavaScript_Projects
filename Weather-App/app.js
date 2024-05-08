// Weather App using OpenWeatherMap API

// API key
const apiKey = "a19d0e27b17434ce6471ea4f53a5a74a";
let search = document.querySelector("search-box button");
let container = document.querySelector(".container");
let weatherBox = document.querySelector(".weather-box");
let weatherDetails = document.querySelector(".weather-details");

(() => {
  let search = document.getElementById("search");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      showWeatherData(res); // todo:
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
})();

function findWeather() {
  const search = document.querySelector(".search-box input").value;
  const apiKey = "a19d0e27b17434ce6471ea4f53a5a74a"; // Move apiKey here if it's not defined globally

  // Check if search input is empty
  if (search === "") {
    console.log("Please enter a city name.");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      showWeatherData(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}


function showWeatherData(res) {
  const image = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temp");
  const description = document.querySelector(".weather-box #weather-update");
  const humidity = document.querySelector(".weather-details .humidity span");
  const wind = document.querySelector(".weather-details .wind span");
  const city = document.querySelector(".weather-box #city");

  // Use res instead of json
  if (res.weather[0].main === "Clouds") {
    image.src = "images/cloud-removebg-preview.png";
  } else if (res.weather[0].main === "Clear") {
    image.src = "images/clear2-removebg-preview.png";
  } else if (res.weather[0].main === "Rain") {
    image.src = "images/rain.png";
  } else if (res.weather[0].main === "Snow") {
    image.src = "images/snow-removebg-preview.png";
  } else if (res.weather[0].main === "Mist") {
    image.src = "images/mist.png";
  } else {
    image.src = "images/cloud-removebg-preview.png";
  }

  temperature.textContent = res.main.temp;
  description.textContent = res.weather[0].description; 
  humidity.textContent = res.main.humidity;
  wind.textContent = res.wind.speed;
  city.textContent = res.name;
}



document.getElementById("search").addEventListener("click", findWeather);
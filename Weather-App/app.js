// Weather App using OpenWeatherMap API

// API key
const apiKey = a19d0e27b17434ce6471ea4f53a5a74a;

(() => {
  let search = document.getElementById("search");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=a19d0e27b17434ce6471ea4f53a5a74a&units=metric`
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

const findWeather = () => {
  let searchWeather = document
    .getElementById("search")
    .value.toUpperCase()
    .trim();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=a19d0e27b17434ce6471ea4f53a5a74a&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      showWeatherData(res); // todo:
    })
    .catch((err) => {
      console.log(err);
    });
};

const showWeatherData = () => {

}
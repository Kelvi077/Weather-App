import { apiKey } from "./api.js";
import { apiUrl } from "./api.js";

$("#search-icon").on("click", function () {
  let city = $(".search").val();
  weather(city);
});

function weather(city) {
  // Make the API call
  $.get(apiUrl + city + apiKey, function (data) {
    console.log(data); // Log the data received from the API

    $(".degrees").html(data.main.temp + " °C");
    $(".city").html(city);
    $(".city").css({ "text-transform": "uppercase" });
    $("#humidity").html(data.main.humidity + " %");
    $("#wind").html(data.wind.speed + " km/h");

    if (data.weather[0].main === "Clouds") {
      console.log(data.weather[0].main);
      $("#weather-icon").removeClass();
      $("#weather-icon").addClass("bi bi-cloud-fill custom-size");
    } else if (data.weather[0].main === "Rain") {
      console.log(data.weather[0].main);
      $("#weather-icon").removeClass();
      $("#weather-icon").addClass("bi bi-cloud-lightning-rain-fill");
    } else if (data.weather[0].main === "Clear") {
      console.log(data.weather[0].main);
      $("#weather-icon").removeClass();
      $("#weather-icon").addClass("bi bi-brightness-high");
    } else if (data.weather[0].main === "Snow") {
      console.log(data.weather[0].main);
      $("#weather-icon").removeClass();
      $("#weather-icon").addClass("bi bi-cloud-snow-fill");
    } else if (data.weather[0].main === "Drizzle") {
      console.log(data.weather[0].main);
      $("#weather-icon").removeClass();
      $("#weather-icon").addClass("bi bi-cloud-drizzle-fill");
    } else {
      $("#weather-icon").removeClass();
      $("#weather-icon").addClass("bi bi-cloud-fill custom-size");
    }
  }).fail(function () {
    console.error("Error fetching data from API"); // Log an error if the API call fails
  });
}

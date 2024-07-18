const key = "c4e5177d9b4e3609676c3fdf074d8f03";

// id for SLC
let city = "Salt Lake City,US";

//api call
let response = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + key)
  .then(function (resp) {return resp.json();})
  .then(function (resp) {displayWeather(resp);});

//display the values from the response json
function displayWeather(resp) {
    console.log(resp);
    document.getElementById("location").innerHTML = "Weather for " + resp.name;
    document.getElementById("temperature").innerHTML = "Temperature: " + ((9.0 * (parseFloat(resp.main.temp) - 273.15)) / 5.0 + 32).toFixed(0) + "&degf";

    document.getElementById("feels-like").innerHTML = "Feels like: " + ((9.0 * (parseFloat(resp.main.feels_like) - 273.15)) / 5.0 + 32).toFixed(0) + "&degf";
    document.getElementById("high").innerHTML = "High of: " + ((9.0 * (parseFloat(resp.main.temp_max) - 273.15)) / 5.0 + 32).toFixed(0) + "&degf";
    document.getElementById("low").innerHTML = "Low of: " + ((9.0 * (parseFloat(resp.main.temp_min) - 273.15)) / 5.0 + 32).toFixed(0) + "&degf";
    document.getElementById("condition").innerHTML = "Conditions: " + resp.weather[0].description;
    document.getElementById("humidity").innerHTML = "Humidity: " + resp.main.humidity + "%";
    const sunriseTime = convertUnixTimestampToLocalTime(resp.sys.sunrise, resp.timezone);
    const sunsetTime = convertUnixTimestampToLocalTime(resp.sys.sunset, resp.timezone);

    document.getElementById("sunrise").innerHTML = "Sunrise: " + sunriseTime;
    document.getElementById("sunset").innerHTML = "Sunset: " + sunsetTime;
}

function convertUnixTimestampToLocalTime(unixTimestamp, timezoneOffset) {
    // Convert timestamp to milliseconds
    const date = new Date((unixTimestamp + timezoneOffset) * 1000);

    // Format the time as HH:MM:SS AM/PM
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    return formattedTime;
}

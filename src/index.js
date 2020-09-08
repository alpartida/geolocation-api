function showPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp, fail);
}

let apiKey = "c48220bc58aa270f2b032dac0b7f1917";

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("h1");
  tempElement.innerHTML = `It is ${temperature} in Santa Ana`;
}

function fail(error) {
  console.log(error.message);
}

navigator.geolocation.getCurrentPosition(showPosition);

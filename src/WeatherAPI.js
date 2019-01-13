const api = "https://www.metaweather.com/api/location";
const proxyUrl = "https://cors.io/?";
const url = proxyUrl + api;

export const showErrorMessage = (error) => {
  document.querySelector('.error-block').style.display = "block";
  console.log("There was an error: " + error.message)
}

export const getWeatherData = (woeid) => {
  let weatherUrl = `${url}/${woeid}/`;
  return fetch(weatherUrl)
    .then(response => response.json())
    .then(data => data, 
      error => {
        showErrorMessage(error);
      }
    )
}

export const getWoeid = (city) => {
  let locationUrl = `${url}/search/?query=${city}`;
  document.querySelector('.error-block').style.display = "none";
  return fetch(locationUrl)
    .then(response => response.json())
    .then(data => data[0].woeid,
      error => {
        showErrorMessage(error);
      }
    )
}

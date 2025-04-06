const weatherContainer = document.querySelector("#weather");

const API_KEY = "e194462dc39c61bff64fa07374eaa799"; 

function getWeatherIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const weather = data.weather[0].description;
      const icon = data.weather[0].icon;
      const temp = data.main.temp;
      weatherContainer.innerHTML = `
        <span><strong>위치:</strong> ${city}</span><br>
        <span>${weather} <img src="${getWeatherIcon(icon)}" alt="${weather}" style="vertical-align: middle; width: 24px; height: 24px;">, ${temp.toFixed(1)}°C</span>
      `;
    })
    .catch((error) => {
      console.error("날씨 정보 로딩 실패:", error);
      weatherContainer.innerText = "날씨 정보를 가져올 수 없습니다.";
    });
}

function onGeoError() {
  weatherContainer.innerText = "위치 정보를 확인할 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
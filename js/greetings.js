window.onload = function () {
  const loginForm = document.querySelector("#login-form");
  const loginInput = loginForm.querySelector("input[type='text']");
  const greetingBox = document.querySelector("#greeting-box");
  const greetingName = document.querySelector("#greeting-name");
  const greetingMessage = document.querySelector("#greeting-message");
  const layoutContainer = document.querySelector("#layout-container");

  const USERNAME_KEY = "username";

  function getGreetingMessage() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "좋은 아침입니다!";
    else if (hour >= 12 && hour < 18) return "좋은 오후입니다!";
    else return "좋은 밤입니다.";
  }

  function fetchWeatherAndShowGreeting(username) {
    function onGeoSuccess(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API_KEY = "e194462dc39c61bff64fa07374eaa799";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${API_KEY}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const weather = data.weather[0].description;
          const icon = data.weather[0].icon;
          const temp = data.main.temp;
          const location = data.name;

          greetingName.innerText = `안녕하세요, ${username}`;
          greetingMessage.innerHTML = `
            ${getGreetingMessage()}<br><br>
            오늘 ${location}의 날씨는 ${weather} <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon"> 입니다.<br>
            현재 온도는 ${temp.toFixed(1)}°C 입니다.
          `;
          greetingBox.classList.remove("hidden");
          layoutContainer.classList.remove("hidden");
        })
        .catch(error => {
          console.error("날씨 정보를 불러오는 중 오류 발생:", error);
          greetingName.innerText = `안녕하세요, ${username}`;
          greetingMessage.innerText = getGreetingMessage();
          greetingBox.classList.remove("hidden");
          layoutContainer.classList.remove("hidden");
        });
    }

    function onGeoError() {
      greetingName.innerText = `안녕하세요, ${username}`;
      greetingMessage.innerText = getGreetingMessage();
      greetingBox.classList.remove("hidden");
      layoutContainer.classList.remove("hidden");
    }

    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  }

  function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value.trim();
    if (username === "") return;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add("hidden");
    fetchWeatherAndShowGreeting(username);
  }

  function handleLogout() {
    localStorage.removeItem(USERNAME_KEY);
    greetingBox.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginInput.value = "";
    layoutContainer.classList.add("hidden");
  }

  loginForm.addEventListener("submit", onLoginSubmit);

  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (!savedUsername || savedUsername.trim() === "") {
    loginForm.classList.remove("hidden");
    greetingBox.classList.add("hidden");
    layoutContainer.classList.add("hidden");
  } else {
    loginForm.classList.add("hidden");
    fetchWeatherAndShowGreeting(savedUsername);
  }

  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "로그아웃";
  logoutBtn.className = "logout-button";
  logoutBtn.addEventListener("click", handleLogout);
  greetingBox.appendChild(logoutBtn);
};

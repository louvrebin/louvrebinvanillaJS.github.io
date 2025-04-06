const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input[type='text']");
const greetingBox = document.querySelector("#greeting-box");
const greetingName = document.querySelector("#greeting-name");
const greetingMessage = document.querySelector("#greeting-message");

const USERNAME_KEY = "username";

function getGreetingMessage() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "좋은 아침입니다!";
  else if (hour >= 12 && hour < 18) return "좋은 오후입니다!";
  else return "좋은 밤 되세요!";
}

function showGreeting(username) {
  greetingName.innerText = `안녕하세요, ${username}`;
  greetingMessage.innerText = getGreetingMessage();

  // 예시: 위치와 날씨 정보를 동적으로 할당 (실제 API 호출 등으로 대체 가능)
  const locationName = document.getElementById("location-name");
  const weatherStatus = document.getElementById("weather-status");
  locationName.innerText = "서울";
  weatherStatus.innerText = "맑음";

  greetingBox.classList.remove("hidden");
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value.trim();
  if (username === "") return;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  showGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (!savedUsername || savedUsername.trim() === "") {
  loginForm.classList.remove("hidden");
  greetingBox.classList.add("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add("hidden");
  showGreeting(savedUsername);
}

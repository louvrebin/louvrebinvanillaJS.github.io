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
  greetingBox.classList.remove("hidden");
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value.trim();
  if (username === "") return; // 이름이 없으면 아무것도 안 함

  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  showGreeting(username);
}

// 페이지 로드시 실행
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null || savedUsername.trim() === "") {
  // 이름이 없으면 로그인 폼만 보임
  loginForm.classList.remove("hidden");
  greetingBox.classList.add("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 이름이 있으면 바로 인사 박스 보여줌
  loginForm.classList.add("hidden");
  showGreeting(savedUsername);
}

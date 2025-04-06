window.onload = function () {
  const loginForm = document.querySelector("#login-form");
  const loginInput = loginForm.querySelector("input[type='text']");
  const greetingBox = document.querySelector("#greeting-box");
  const greetingName = document.querySelector("#greeting-name");
  const greetingMessage = document.querySelector("#greeting-message");

  const USERNAME_KEY = "username";

  function getGreetingByTime() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "좋은 아침입니다! ☀️";
    else if (hour >= 12 && hour < 18) return "좋은 오후입니다! 🌤️";
    else return "좋은 밤입니다! 🌙";
  }
  
  function showGreeting(username) {
    greetingName.innerHTML = `안녕하세요, <strong>${username}님</strong>`;
    greetingMessage.innerText = getGreetingByTime(); 
    greetingBox.classList.add("show");
    greetingBox.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }
  
  

  function handleLogin(event) {
    event.preventDefault();
    const username = loginInput.value.trim();
    if (!username) return;
    localStorage.setItem(USERNAME_KEY, username);
    showGreeting(username);
  }

  function handleLogout() {
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove("hidden");
    loginInput.value = "";
    greetingBox.classList.remove("show");
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) {
    showGreeting(savedUsername);
  } else {
    loginForm.classList.remove("hidden");
    greetingBox.classList.add("hidden");
  }

  loginForm.addEventListener("submit", handleLogin);

  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "로그아웃";
  logoutBtn.className = "logout-button";
  logoutBtn.addEventListener("click", handleLogout);
  greetingBox.appendChild(logoutBtn);
};

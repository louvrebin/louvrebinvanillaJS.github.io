//const now = new Date();
//const hour = now.getHours();
const hour = 20;
let imageName = "";
let timeGreeting = "";
let isNight = false;

if (hour >= 6 && hour < 12) {
  imageName = "morning.jpg";
  timeGreeting = "좋은 아침입니다!";
} else if (hour >= 12 && hour < 18) {
  imageName = "afternoon.jpg";
  timeGreeting = "좋은 오후입니다!";
} else {
  imageName = "night.jpg";
  timeGreeting = "좋은 밤 되세요!";
  isNight = true; // 밤임
}

// 배경 이미지에 fade-in 클래스 추가
document.body.classList.add("fade-in");
document.body.style.backgroundImage = `url("img/${imageName}")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";

// 인사말 출력
const greetingTarget = document.querySelector("#greeting");
greetingTarget.innerText = timeGreeting;
greetingTarget.classList.remove("hidden");

// 밤이면 다크모드 적용
if (isNight) {
  document.body.classList.add("dark-mode");
}

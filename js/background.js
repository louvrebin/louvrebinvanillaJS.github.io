const now = new Date();
const hour = now.getHours();

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
  isNight = true; 
}

document.body.classList.add("fade-in");
document.body.style.backgroundImage = `url("img/${imageName}")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";

if (isNight) {
  document.body.classList.add("dark-mode");
}

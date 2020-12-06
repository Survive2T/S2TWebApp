import { posts } from "../db.js";

let content = document.createElement("div");
let screenshot = document.createElement("img");
let caption = document.createElement("div");
let subject = document.createElement("h2");
let description = document.createElement("p");
let countDownWidget = document.createElement("p");
let background = document.getElementById("Background");
let container = document.getElementById("Main-Content");
let header = document.getElementById("Header");
const countDownDate = new Date("Feb 18, 2021 00:00:00").getTime();

content.className = "Content";
caption.className = "Caption";
countDownWidget.className = "CountDownWidget";

content.appendChild(screenshot);
content.appendChild(caption);
caption.appendChild(subject);
caption.appendChild(description);

let CreateCountDownWidget = function () {
  UpdateCountDownWidget();
  header.appendChild(countDownWidget);
};

let UpdateCountDownWidget = function () {
  let now = new Date().getTime();
  let finalTimer = "";
  const countDownTimer = [0, 0, 0, 0];
  const countDown = countDownDate - now;

  countDownTimer[0] = Math.floor(countDown / 86400000);
  countDownTimer[1] = Math.floor((countDown % 8640000) / 3600000);
  countDownTimer[2] = Math.floor((countDown % 3600000) / 60000);
  countDownTimer[3] = Math.floor((countDown % 60000) / 1000);
  finalTimer = ("00" + countDownTimer[0]).slice(-2);
  for (let i = 1; i < countDownTimer.length; i++) {
    finalTimer = finalTimer + ":" + ("00" + countDownTimer[i]).slice(-2);
  }
  countDownWidget.innerHTML = "This game will unlock in " + finalTimer;
};

let UpdateBackgroundSize = function () {
  let w = window.innerWidth;
  let h = window.innerHeight;
  if (w / h < 1.9125) {
    background.style.backgroundSize = "auto 100%";
  } else {
    background.style.backgroundSize = "100% auto";
  }
};

window.addEventListener("resize", UpdateBackgroundSize);
window.addEventListener("load", (event) => {
  UpdateBackgroundSize();
  CreateCountDownWidget();
  setInterval(UpdateCountDownWidget, 1000);
  let i = 0;
  posts.forEach((element) => {
    screenshot.src = posts[i].mImage;
    subject.innerHTML = posts[i].mSubject;
    description.innerHTML = posts[i].mDescription;
    container.appendChild(content.cloneNode(true));
    i++;
  });
});

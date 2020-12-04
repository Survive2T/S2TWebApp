import { posts } from "../db.js";

let content = document.createElement("div");
let screenshot = document.createElement("img");
let caption = document.createElement("div");
let subject = document.createElement("h2");
let description = document.createElement("p");

content.className = "Content";
caption.className = "Caption";

content.appendChild(screenshot);
content.appendChild(caption);
caption.appendChild(subject);
caption.appendChild(description);

let background = document.getElementById("background");
let container = document.getElementById("Main-Content");

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
  let i = 0;
  posts.forEach((element) => {
    screenshot.src = posts[i].mImage;
    subject.innerHTML = posts[i].mSubject;
    description.innerHTML = posts[i].mDescription;
    container.appendChild(content.cloneNode(true));
    i++;
  });
});

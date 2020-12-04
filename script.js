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

window.onload = function () {
  let i = 0;
  let container = document.getElementById("Main-Content");
  for (i = 0; 0 < posts.length; i++) {
    screenshot.src = posts[i].mImage;
    subject.innerHTML = posts[i].mSubject;
    description.innerHTML = posts[i].mDescription;
    container.appendChild(content.cloneNode(true));
  }
};

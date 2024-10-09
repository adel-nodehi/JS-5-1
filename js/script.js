"use strict";

const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const container = document.querySelector(".container");
const linkEl = document.querySelector(".link");
const imageEl = document.querySelector(".car-images");

/*

    // childEl.textContent = "<button>click me!</button> hello";
    // childEl.innerHTML = "<button>click me!</button> hello";

    console.log(parentEl.innerHTML);

*/

/*
const html = `<button class='button'>click me!</button> ${23} hello`;

// childEl.insertAdjacentHTML("afterbegin", html);
// childEl.insertAdjacentHTML("beforeend", html);
childEl.insertAdjacentHTML("beforebegin", html);
*/

/*
for (let i = 1; i <= 3; i++) {
  const html = `<p>item ${i}</p>`;

  container.insertAdjacentHTML("beforeend", html);
}

<div class="container">
  <p>item 1</p>
  <p>item 2</p>
  <p>item 3</p>
</div>
*/

/*
const containerEl = document.createElement("div");
containerEl.classList.add("container");

const button = document.createElement("button");
button.textContent = "Click me!";
button.classList.add("btn");

// insert button into container
containerEl.append(button);
container.appendChild();

// insert container into body
// document.body.prepend(containerEl);

// document.body.prepend(button.cloneNode(true));

/////////////////////////////////////////////////
const containerEl = document.createElement("div");

const inputEl = document.createElement("input");

const buttonEl = document.createElement("button");
buttonEl.textContent = "Click me!";

const pEl = document.createElement("p");
pEl.textContent = "result";

containerEl.append(inputEl, buttonEl, pEl);

document.body.prepend(containerEl);


document.querySelector(".item-2").remove();
*/

/*
console.log(getComputedStyle(linkEl).backgroundColor);

const linkWidth = getComputedStyle(linkEl).width;

// add 20 to width
console.log(Number.parseFloat(linkWidth) + 20);

// set width to element width
linkEl.style.width = `${Number.parseFloat(linkWidth) + 20}px`;

// 57.3438px
*/

/*
// Attribute
console.log(imageEl.alt);
imageEl.alt = "cat picture";
console.log(imageEl.className);

console.log(imageEl.getAttribute("alt"));

console.log(imageEl.src);
console.log(imageEl.getAttribute("src"));
imageEl.setAttribute("alt", "hello");
imageEl.removeAttribute("alt");

//////////// data-image-number
console.log(imageEl.dataset.imageNumber);
imageEl.dataset.model = "bmw m5";
*/

/*
console.log(imageEl.classList.contains("something"));
console.log(imageEl.classList.contains("blue"));
*/

/*
// linkEl.addEventListener("click", function () {
//   console.log("EventListener: link clicked");
// });

// linkEl.onclick = function () {
//   console.log("onclick fired");
// };

linkEl.addEventListener("mouseenter", function () {
  console.log("EventListener: mouse entered");
  linkEl.style.transition = "all .5s";
  linkEl.style.backgroundColor = "blue";
});

linkEl.addEventListener("mouseleave", function () {
  console.log("EventListener: mouse leaved");
  linkEl.style.transition = "all .5s";
  linkEl.style.backgroundColor = "red";
});
*/

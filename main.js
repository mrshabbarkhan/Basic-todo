let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");
let container = document.querySelector(".container");

form.addEventListener("submit", savelist);

// create function

function savelist(e) {
  e.preventDefault();
  if (input.value === "") {
    alert(" please enter a Text");
  } else {
    let list = document.createElement("li");
    list.innerText = input.value;
    ul.appendChild(list);
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btn.style.color = "white";

    list.appendChild(btn);

    form.reset();
  }
}

ul.addEventListener("click", remove);
function remove(e) {
  if (
    e.target.className.includes("btn") ||
    e.target.className.includes("fa-solid")
  ) {
    if (e.target.className.includes("btn")) {
      li = e.target.parentElement;
    } else {
      li = e.target.parentElement.parentElement;
    }
    li.remove();
  }
}

var check = 0;
function change() {
  if (check == 0) {
    circle.style.backgroundImage = "url(moon.png)";
    body.style.backgroundColor = "#fff";
    container.style.backgroundColor = "#fff";  
    check = 1;
  } else {
    circle.style.backgroundImage = "url(sun.png)";
    body.style.backgroundColor = "#2f363e";
    container.style.backgroundColor = "#2f363e";
    check = 0;
  }
}

circle.addEventListener("click", change);

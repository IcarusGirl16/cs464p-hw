// Add your code here

change.addEventListener("click", handleClick);
seconds.addEventListener("input", handleInput);
let page = document.getElementById("party");
let changeBtn = document.getElementById("change");
let toggle = false;
let interval = 1;
let flash = null;

function handleClick(event) {
  if (toggle) {
    toggle = false;
    clearInterval(flash);
    flash = null;
    changeButton();
  } else {
    toggle = true;
    changeButton();
    handleInput();
    flash = setInterval(setColor, interval);
  }
}

function handleInput() {
  interval = Number(seconds.value * 1000);
  console.log(interval);
}

function changeButton() {
  if (toggle) {
    changeBtn.setAttribute("class", "btn btn-danger");
    changeBtn.setAttribute("value", "Stop");
  } else {
    changeBtn.setAttribute("class", "btn btn-primary");
    changeBtn.setAttribute("value", "Start");
  }
}

function colorGenerator() {
  let colorValues = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += colorValues[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

function setColor() {
  page.style.backgroundColor = colorGenerator();
}

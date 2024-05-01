// Sources: https://stackoverflow.com/questions/1484506/random-color-generator
//          https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//          https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb

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
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "rgb(" + r + "," + g + "," + b + "," + 0.3 + ")";

  return color;
}

function setColor() {
  page.style.backgroundColor = colorGenerator();
}

// Sources: https://stackoverflow.com/questions/38053729/javascript-how-to-reverse-a-number
const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

let item = document.querySelector("#output");
let out = document.createElement("div");
//out.setAttribute("class", "message");
item.append(out);

function handleInput(event) {
  if (elem.value <= 0) {
    out.setAttribute("class", "text-danger");
    out.textContent = "Please enter a positive number.";
  } else {
    let rev = elem.value.toString().split("").reverse().join("");
    if (rev == elem.value) {
      out.setAttribute("class", "text-success");
      out.textContent = "Yes. This is a palindrome!";
    } else {
      out.setAttribute("class", "text-danger");
      out.textContent = "No. Try again.";
    }
  }
}

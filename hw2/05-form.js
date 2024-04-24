// Add your code here
let fullname = document.querySelector("fullname");
let email = document.querySelector("email");
let regstatus = document.querySelector("regstat");
let classlist = document.querySelectorAll('input[type="checkbox"]:checked');
let thoughts = document.querySelector("other");

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  addToModal();
});

function addToModal() {
  let popup = document.getElementsByClassName("modal-body");
}

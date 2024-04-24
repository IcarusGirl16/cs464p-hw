// Add your code here
let fullname = document.querySelector("#fullname");
let email = document.querySelector("#email");
let regstatus = document.querySelector("#regstat");
let classlist = document.querySelectorAll('input[type="checkbox"]:checked');
let thoughts = document.querySelector("#other");
let modal = new bootstrap.Modal(document.getElementById("sub-modal"));

let form = document.getElementById("form");
form.addEventListener("submit", showModal);

function addToModal() {
  let popup = document.getElementById("body");
  let holder = document.createElement("div");
  let name = document.createElement("p");
  let address = document.createElement("p");
  let status = document.createElement("p");
  let classes = document.createElement("p");
  let comment = document.createElement("p");

  name.textContent = fullname.value;
  address.textContent = email.value;
  status.textContent = regstatus.value;
  comment.textContent = thoughts.value;

  classlist.forEach((checkbox) => {
    let item = document.createElement("ul");
    item.textContent = checkbox.value;
    classes.append(item);
  });

  holder.append(name);
  holder.append(address);
  holder.append(status);
  holder.append(classes);
  holder.append(comment);
  popup.append(holder);
}

function showModal() {
  addToModal();
  modal.show();
}

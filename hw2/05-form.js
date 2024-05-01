let fullname = document.querySelector("#fullname");
let email = document.querySelector("#email");
let regstatus = document.querySelector("#regstat");
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
  let classesLabel = document.createElement("p");
  let comment = document.createElement("p");

  name.textContent = `Full name: ${fullname.value}`;
  address.textContent = `Email: ${email.value}`;
  status.textContent = `Registration Status: ${regstatus.value}`;
  comment.textContent = `Anything Else: ${thoughts.value}`;
  classesLabel.textContent = "Classes Taken: ";

  let checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkedCheckboxes.forEach((checkbox) => {
    let item = document.createElement("li");
    item.textContent = checkbox.value;
    classes.append(item);
  });

  holder.append(name);
  holder.append(address);
  holder.append(status);
  holder.append(classesLabel);
  holder.append(classes);
  holder.append(comment);
  popup.append(holder);
}

function showModal(event) {
  event.preventDefault();
  addToModal();
  modal.show();
}

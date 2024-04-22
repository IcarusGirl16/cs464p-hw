// Add your code here

userInput.addEventListener("keydown", handleKeyDown);
const elem = document.querySelector("input");

function handleKeyDown(event) {
  let paragraph = document.getElementById("text");
  let textToSearch = elem.value;
  console.log(textToSearch);
  textToSearch = textToSearch.replace(/[.*+?^${}()|[|]\\]/g, "\\$&");
  let pattern = new RegExp(`${textToSearch}`, "gi");
  if (textToSearch !== "" || textToSearch !== " ") {
    paragraph.innerHTML = paragraph.textContent.replace(
      pattern,
      (match) => `<mark style="background-color: yellow">${match}</mark>`
    );
  }
}

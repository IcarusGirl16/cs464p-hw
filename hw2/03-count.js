userInput.addEventListener("input", handleInput);
const elem = document.querySelector("input");

function handleInput(event) {
  let paragraph = document.getElementById("text");
  let textToSearch = elem.value;
  console.log(textToSearch);
  textToSearch = textToSearch.replace(/[.*+?^${}()|[|]\\]/g, "\\$&");
  let pattern = new RegExp(`${textToSearch}`, "gi");
  if (textToSearch !== "" && textToSearch !== " ") {
    paragraph.innerHTML = paragraph.textContent.replace(
      pattern,
      (match) => `<span style="background-color: yellow">${match}</span>`
    );
  }
}

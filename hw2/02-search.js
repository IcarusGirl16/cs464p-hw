// Add your code here

search.addEventListener("click", handleClick);

//const elem = document.querySelector("input");
//userInput.addEventListener("input", handleInput);

function handleClick(event) {
  displayCharacters(characters);
}

const createCharaCard = (chara) => {
  const container = document.createElement("section");
  container.setAttribute("class", "character");
  let name = document.createElement("h4");
  name.setAttribute("class", "name");
  let height = document.createElement("p");
  height.setAttribute("class", "height");
  let birth_year = document.createElement("p");
  birth_year.setAttribute("class", "year");

  name.textContent = chara.name;
  height.textContent = `Height: ${chara.height}`;
  birth_year.textContent = `Birth Year: ${chara.birth_year}`;

  container.append(name);
  container.append(height);
  container.append(birth_year);

  return container;
};

const displayCharacters = (characters) => {
  let app = document.getElementById("results");
  for (const chara in characters) {
    const charaCard = createCharaCard(characters[chara]);
    app.appendChild(charaCard);
  }
};

// Query selectors
const charactersContainer = document.querySelector(".characters");
const chapters = document.getElementById("chapters");
const getCharacters = document.getElementById("get-characters");
const planetsSection = document.querySelector(".planets-section");
const planetsContainer = document.querySelector(".planets");
const planetsButtons = document.querySelector(".planet-buttons");
const getPlanets = document.getElementById("get-planets");
const prevPage = document.getElementById("previous-page");
const nextPage = document.getElementById("next-page");
const translate = document.getElementById("translate");

// Event listeners
let index = 0;

getCharacters.addEventListener("click", () => {
  charactersContainer.innerHTML = "";
  const chapter = chapters.value;
  getFilm(chapter);
});

getPlanets.addEventListener("click", () => {
  planetsButtons.style.display = "flex";
  getPlanet(index);
});

prevPage.addEventListener("click", () => {
  index > 0 ? index-- : (index = 9);
  getPlanet(index);
});

nextPage.addEventListener("click", () => {
  index < 9 ? index++ : (index = 0);
  getPlanet(index);
});

// Functions

async function getFilm(index) {
  try {
    const request = await fetch(`https://swapi.dev/api/films/${index}`).then(
      (response) => response.json()
    );

    for (promise of request.characters) {
      const hero = await fetch(promise).then((res) => res.json());
      charactersContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="character">
          <img src="./img/characters/${hero.name
            .split(" ")
            .join("")}.jpg" class="hero-image" alt="Character photo not found">
          <p id="name">${hero.name}</p>
          <p id="gender">${hero.gender}</p>
          <p id="birth-date">${hero.birth_year}</p>
        </div>`
      );
    }
  } catch (e) {
    console.log(e);
  }
}

async function getPlanet(planetIndex) {
  try {
    planetsContainer.innerHTML = "";
    planetsSection.style.height = "800px";
    const { results: planetsArray } = await fetch(
      "https://swapi.dev/api/planets/"
    ).then((response) => response.json());

    planetsContainer.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="planet__image-container">
        <img src="./img/planets/planet-${planetIndex}.jpg" class="planet-image" alt="planet-image" />
        <div class="planet-description">
          <p>Name: ${planetsArray[planetIndex].name}</p>
          <p>Climate: ${planetsArray[planetIndex].climate}</p>
          <p>Population: ${planetsArray[planetIndex].population}</p>
          <p>Terrain: ${planetsArray[planetIndex].terrain}</p>
          <p>Films: ${planetsArray[planetIndex].films.map((film) =>
            film.slice(-2, -1)
          )}</p>
        </div>
      </div>
    `
    );
  } catch (e) {
    console.log(e);
  }
}

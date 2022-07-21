"use strict";
// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
// Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();
const container = document.querySelector(".container");
const button = document.querySelector(".generateBlock");
const iterationButton = document.querySelector(".iterationButton");
let timer;

const generateBlocks = function (columns = 5, quantity = 25) {
  // Clear container if not empty
  if (container.innerHTML !== "") container.innerHTML = "";

  // Apply container styles
  container.style.display = "grid";
  container.style.maxWidth = `${columns * 50}px`;
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  // Create tiles
  for (let i = 0; i < quantity; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.style.height = "50px";
    tile.style.width = "50px";
    container.append(tile);
  }

  // Generate random colors
  const generateColor = () => Math.floor(Math.random() * 256);
  document
    .querySelectorAll(".tile")
    .forEach(
      (tile) =>
        (tile.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`)
    );
};

button.addEventListener("click", function () {
  button.innerText = "Змінити кольори";
  iterationButton.style.display = "block";
  generateBlocks(5, 25);
});

// Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
// Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();
const generateBlocksInterval = () =>
  (timer = setInterval(generateBlocks, 1000));

iterationButton.addEventListener("click", function () {
  iterationButton.classList.toggle("active");

  if (iterationButton.classList.contains("active")) {
    iterationButton.innerText = "Зупинити";
    generateBlocksInterval(5, 25);
  } else {
    iterationButton.innerText = "Змінювати кольори посекундно";
    clearInterval(timer);
  }
});

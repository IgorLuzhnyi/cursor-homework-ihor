// Query Selectors
const getValue = document.getElementById("first-task__button");
const outputValue = document.querySelector(".first-task__text");
const buttons = document.querySelector(".buttons");
const textValue = document.querySelector(".second-task__text");

// Event listenes
getValue.addEventListener(
  "click",
  () => (outputValue.innerHTML = idGenerator.next().value)
);

buttons.addEventListener("click", function (e) {
  const fontAction = e.target.innerText;
  textValue.style.fontSize = `${fontGenerator.next(fontAction).value}px`;
});

// 1. Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
function* createIdGenerator() {
  let i = 1;
  while (true) yield i++;
}

const idGenerator = createIdGenerator();

// 2. Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
// Працювати генератор буде наступним чином:
// const fontGenerator = newFontGenerator(14); // 14 – стартове значення
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16
// fontGenerator.next("down").value -> 14
// fontGenerator.next("down").value -> 12
// fontGenerator.next().value -> 12
function* newFontGenerator(fontSize) {
  while (true) {
    const current = yield fontSize;
    if (current === "Збільшити") {
      if (fontSize < 80) fontSize += 2;
    } else {
      if (fontSize > 2) fontSize -= 2;
    }
  }
}

const fontGenerator = newFontGenerator(14);
textValue.style.fontSize = `${fontGenerator.next().value}px`;

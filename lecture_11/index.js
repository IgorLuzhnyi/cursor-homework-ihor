// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:
// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

async function getRandomChinese(length, miliseconds = 50) {
  try {
    if (!Number.isInteger(length) || length < 1)
      throw new Error("Please type a positive integer number as an argument.");
    let text = "";
    while (text.length < length) {
      await new Promise((res) => {
        setTimeout(() => {
          const sign = Date.now().toString().slice(-5);
          res((text += String.fromCharCode(sign)));
        }, miliseconds);
      });
    }
    console.log(text);
  } catch (e) {
    alert(e);
  }
}

console.log(
  "Результат функції getRandomChinese(4). Можете передати другий аргумент як кількість мілісекунд"
);
getRandomChinese(4);

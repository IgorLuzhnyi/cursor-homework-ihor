// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
const getMaxDigit = function (number) {
  if (typeof +number !== "number" || isNaN(number))
    console.log("Please type a number!");
  else {
    const maxDigit = Math.max(...number.toString().split(""));
    return maxDigit;
  }
};

document.querySelector(".result_1").textContent = getMaxDigit(486546);

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function getPowered(number, power) {
  let count = number;
  for (let i = 1; i < Math.abs(power); i++) {
    count = count * number;
  }
  // Math.abs(power) !== -power ? count : 1 / count; // doesn't output in DOM for some reason
  if (Math.abs(power) !== -power) {
    return count;
  } else if (power === 0) {
    return 1;
  } else {
    return 1 / count;
  }
}

document.querySelector(".result_2").textContent = getPowered(2, 4);

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
const formatName = function (name) {
  if (typeof name !== "string") console.log("Please type a name!");
  else {
    return name[0].toLocaleUpperCase() + name.substring(1).toLowerCase();
  }
};

document.querySelector(".result_3").textContent = formatName("jAveLInA");

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%).
function netSalary(salary, tax = 19.5) {
  return salary - salary * (tax / 100);
}

document.querySelector(".result_4").textContent = netSalary(2500, 20);

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector(".result_5").textContent = getRandomNumber(21, 27);

// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = (letter, text) =>
  text
    .toLowerCase()
    .split("")
    .filter((curLetter) => curLetter === letter.toLowerCase()).length;

document.querySelector(".result_6").textContent = countLetter("a", "Alabama");

// 7-8. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$. Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
function convertCurrency(value) {
  const curRate = 30;
  let message;
  if (
    isNaN(parseInt(value)) ||
    value
      .replace(`${parseInt(value)}`, "")
      .replace("$", "")
      .replace("uah", "")
      .replace("UAH", "").length > 0
  ) {
    console.log("Wrong value!");
  } else if (value.includes("$")) {
    message = `${parseInt(value)}$ is ${(parseInt(value) * curRate).toFixed(
      2
    )}UAH`;
  } else if (value.includes("UAH") || value.includes("uah")) {
    message = `${parseInt(value)}UAH is ${(parseInt(value) / curRate).toFixed(
      2
    )}$`;
  } else {
    console.log("Wrong currency! Should be $ or UAH(uah)");
  }
  return message;
}

document.querySelector(".result_7").textContent = convertCurrency("200$");

// 9-10. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240127
function getRandomPassword(digitsNum = 8) {
  let randomPW =
    Math.random()
      .toString()
      .slice(2, digitsNum + 2) * 1;

  if (randomPW.toString().length !== digitsNum) {
    randomPW = (randomPW.toString() + Math.trunc(Math.random() * 10)) * 1;
  }
  return randomPW;
}

document.querySelector(".result_9").textContent = getRandomPassword();

// 11. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (letter, text) =>
  text
    .split("")
    .filter(
      (curLetter) =>
        curLetter.toUpperCase() !== letter && curLetter.toLowerCase() !== letter
    )
    .join("");

document.querySelector(".result_11").textContent = deleteLetters(
  "l",
  "Abraham Lincoln"
);

// 12. Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
const isPalindrom = function (word = "Murder for a jar of red rum") {
  if (
    word.toLowerCase().split(" ").join("").split("").reverse().join("") ===
    word.toLowerCase().split(" ").join("").split("").join("")
  ) {
    return "This word is a palindrome";
  } else {
    return "This word is NOT a palindrome";
  }
};

document.querySelector(".result_12").textContent = isPalindrom("Ailihphilia");

// 13. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим".
const deleteDuplicateLetter = (text) =>
  text
    .toLowerCase()
    .split("")
    .filter(
      (letter, _, array) => array.indexOf(letter) === array.lastIndexOf(letter)
    )
    .join("");

document.querySelector(".result_13").textContent = deleteDuplicateLetter(
  "Бісквіт був дуже ніжним"
);

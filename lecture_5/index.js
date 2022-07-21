// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
const getRandomArray = function (length, min, max) {
  if (min > max) return "Min value has to be less than max value";
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomArray;
};

document.querySelector(".result_1").textContent = getRandomArray(5, 6, 9);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
const getModa = function (...numbers) {
  const intNumbers = numbers.filter((number) => Number.isInteger(number));
  const numbersAndCounts = [];
  let maxCount = 0;
  // Looking for maxCount and meanwhile creating new array with numbers and their counts
  intNumbers.forEach((number, _, array) => {
    let count = 0;
    array.forEach((item) => item === number && count++);
    numbersAndCounts.push([number, count]);
    if (maxCount < count) maxCount = count;
  });
  // Creating an array of unique numbers and their counts
  const modas = numbersAndCounts
    .filter((item) => item[1] === maxCount)
    .map((item) => item[0])
    .filter((item, index, array) => array.indexOf(item) === index); // checking if the first index equal to the current index
  return modas;
};

document.querySelector(".result_2").textContent = getModa(3, 8, 8, 7, 3);

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
const getAverage = function (...numbers) {
  const intNumbers = numbers.filter((number) => Number.isInteger(number));
  const avg =
    intNumbers.reduce((initialValue, currentValue) => {
      return initialValue + currentValue;
    }, 0) / intNumbers.length;
  return avg;
};

document.querySelector(".result_3").textContent = getAverage(3, 10.5, 5, 7);

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
const getMedian = function (...numbers) {
  const intNumbers = numbers
    .filter((number) => Number.isInteger(number))
    .sort((a, b) => a - b);
  let median;
  //   Finding median
  const indexOfMedian = intNumbers.length / 2;
  if (Number.isInteger(indexOfMedian)) {
    median = (intNumbers[indexOfMedian - 1] + intNumbers[indexOfMedian]) / 2;
  } else {
    median = intNumbers[Math.floor(indexOfMedian)];
  }
  return median;
};

document.querySelector(".result_4").textContent = getMedian(5, 4, 3, 100, 100);

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції. Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
const filterEvenNumbers = (...numbers) =>
  numbers.filter((number) => number % 2 !== 0 && Number.isInteger(number));

document.querySelector(".result_5").textContent = filterEvenNumbers(3, 4, 5, 8);

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0. Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
const countPositiveNumbers = (...numbers) =>
  numbers.filter((number) => number > 0 && Number.isInteger(number)).length;

document.querySelector(".result_6").textContent = countPositiveNumbers(
  1,
  -2,
  3,
  -4,
  -5,
  6
);

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5. Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
const getDividedByFive = (...numbers) =>
  numbers.filter((number) => number % 5 === 0 && number);

getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 0);

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.. Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"
const badWords = ["shit", "fuck"];

const replaceBadWords = function (string) {
  const censoredArray = [];
  const words = string.split(" ").filter((word) => word !== ""); // make lowerCase relevant

  words.map((word) => {
    let checked = word; // the word to be censored for all bad words first and then to be pushed to censoredArray
    badWords.forEach((badWord) => {
      let censored = "".padStart(badWord.length, "*");
      while (checked.toLowerCase().includes(badWord)) {
        let indexOfBadWord;
        if (checked.toLowerCase().includes(badWord))
          indexOfBadWord = checked.toLowerCase().indexOf(badWord);

        let curBadWord; // match for badWord regardless of upper- or lowercase found in the whole word
        if (indexOfBadWord >= 0)
          curBadWord = checked.slice(
            indexOfBadWord,
            indexOfBadWord + badWord.length
          );

        if (curBadWord) checked = checked.replace(curBadWord, censored);
      }
    });
    censoredArray.push(checked);
  });
  return censoredArray.join(" ");
};

document.querySelector(".result_8").textContent = replaceBadWords(
  "Merry ShitFuckingshitfUckshitfuckChristmas"
);

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"]. Приклад: divideByThree("live") -> ["liv", "e"]
const divideByThree = function (word) {
  const wholeWord = word.toLowerCase().split(" ").join("");
  const arrayOfParts = [];
  const partLength = 3;
  for (let i = 0; i < wholeWord.length; i += partLength) {
    const part = wholeWord.slice(i, i + partLength);
    arrayOfParts.push(part);
  }
  return arrayOfParts;
};

document.querySelector(".result_9").textContent = divideByThree(
  "somebody   once told me the world is gonna roll me"
);

// 10 Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]

const generateCombinations = function (word) {
  if (word.length < 2 || word.length > 10) return word;
  const arr = [];

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (word.indexOf(letter) != i) continue;
    let restPart = word.slice(0, i) + word.slice(i + 1, word.length);

    for (let variation of generateCombinations(restPart)) {
      arr.push(letter + variation);
    }
  }
  return arr;
};

document.querySelector(".result_10").textContent = generateCombinations("geek");

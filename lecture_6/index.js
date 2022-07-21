const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
const getSubjects = (student) =>
  Object.keys(student.subjects).map((subject) =>
    subject
      .split("_")
      .map(
        (subjectWord) =>
          subjectWord[0].toUpperCase() +
          subjectWord.slice(1, subjectWord.length)
      )
      .join(" ")
  );

console.log(`1. getSubjects(students[1]):`, getSubjects(students[1]));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
const getAverageMark = function (student) {
  const allMarks = [];
  Object.values(student.subjects).map((arr) => allMarks.push(...arr));

  return (
    allMarks.reduce((initialValue, currentValue) => {
      return initialValue + currentValue;
    }, 0) / allMarks.length
  ).toFixed(2);
};

console.log(`2. getAverageMark(students[1]):`, getAverageMark(students[1]));

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
const getStudentInfo = (student) => ({
  course: student.course,
  name: student.name,
  averageMark: getAverageMark(student),
});

console.log(`3. getStudentInfo(students[1]):`, getStudentInfo(students[1]));

// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (students) =>
  students.map((student) => student.name).sort();

console.log(`4. getStudentsNames(students):`, getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = function (students) {
  let bestMark = 0;
  let bestStudent;
  students.forEach((student) => {
    if (getAverageMark(student) > bestMark) {
      bestMark = getAverageMark(student);
      bestStudent = student.name;
    }
  });
  return bestStudent;
};

console.log(`5. getBestStudent(students):`, getBestStudent(students));

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const calculateWordLetters = function (word) {
  const obj = {};
  const uniqueLetters = word
    .toLowerCase()
    .split("")
    .filter(
      (letter, index, array) =>
        array.indexOf(letter) === index && letter !== " "
    );
  // Creating parameters for obj
  uniqueLetters.forEach((letter) => {
    obj[letter] = 0;
  });
  // Checking letter matches
  word
    .toLowerCase()
    .split("")
    .filter((letter) => letter !== " ")
    .forEach((letter) => obj[letter]++);
  return obj;
};

console.log(
  `6. calculateWordLetters("Benedict Cumberbatch")`,
  calculateWordLetters("Benedict Cumberbatch")
);

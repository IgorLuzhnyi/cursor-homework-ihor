const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// Function 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const createPairs = function (arr) {
  let girls = [];
  let boys = [];
  let pairs = [];
  arr.forEach((student) => {
    student[student.length - 1] === "а"
      ? girls.push(student)
      : boys.push(student);
  });
  for (let i = 0; i < girls.length && i < boys.length; i++) {
    pairs.push([`${boys[i]}`, `${girls[i]}`]);
  }
  return pairs;
};

const pairs = createPairs(students);
console.log(
  `Function 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]
const pairs = createPairs(students) //`,
  pairs
);

// Function 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const assignProject = function (pair, theme) {
  let projects = [];
  for (let i = 0; i < pair.length && i < theme.length; i++) {
    projects.push([`${pair[i][0]} і ${pair[i][1]}`, theme[i]]);
  }
  return projects;
};

const pairsAndTheme = assignProject(pairs, themes);
console.log(
  `Function 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const pairsAndTheme = assignProject(pairs, themes) //`,
  pairsAndTheme
);

// Function 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const giveMark = function (arrStudents, arrMarks) {
  let studentMark = [];
  for (let i = 0; i < arrStudents.length && i < arrMarks.length; i++) {
    studentMark.push([`${arrStudents[i]}`, `${arrMarks[i]}`]);
  }
  return studentMark;
};

const studentAndMark = giveMark(students, marks);
console.log(
  `Function 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const studentAndMark = giveMark(students, marks) //`,
  studentAndMark
);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const getPairThemeMark = function (arr) {
  const getRandomMark = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let pairThemeMarkArray = [];
  for (let i = 0; i < arr.length; i++) {
    pairThemeMarkArray.push([...arr[i], `${getRandomMark(1, 5)}`]);
  }
  return pairThemeMarkArray;
};

const pairThemeMark = getPairThemeMark(pairsAndTheme);
console.log(
  `4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const pairThemeMark = getPairThemeMark(pairsAndTheme) //`,
  pairThemeMark
);

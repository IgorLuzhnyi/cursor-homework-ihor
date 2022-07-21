const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
const getMyTaxes = function (salary) {
  return Number((this.middleSalary * this.tax).toFixed(2));
};

console.log(
  `1. getMyTaxes.call(ukraine, 2500):`,
  getMyTaxes.call(ukraine, 2500)
);

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
const getMiddleTaxes = function (country) {
  return Number((this.tax * this.middleSalary).toFixed(2));
};

console.log(`2. getMiddleTaxes.call(litva):`, getMiddleTaxes.call(litva));

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
const getTotalTaxes = function (country) {
  return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
};

console.log(`3. getTotalTaxes.call(litva):`, getTotalTaxes.call(latvia));

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
const getMySalary = function (country) {
  const obj = {};
  setInterval(function () {
    obj.salary = Math.floor(Math.random() * 501) + 1500;
    obj.taxes = (country["tax"] * obj.salary).toFixed(2);
    obj.profit = (obj.salary - obj.taxes).toFixed(2);
    console.log(obj);
  }, 10000);
};

getMySalary(ukraine);

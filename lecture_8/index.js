// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName
      .split(" ")
      .filter(
        (namePart, _, array) =>
          namePart === array[0] || namePart === array[array.length - 1]
      )
      .join(" ");
    this.status = true;
  }

  getInfo = () =>
    this.status === true
      ? `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
      : "Цей студент не навчається в закладі";

  get studentMarks() {
    if (!this.status) {
      return "Цей студент не навчається або був виключений з закладу";
    }
    return this.marks;
  }

  set studentMarks(newMark) {
    if (!this.status) return;
    this.marks.push(newMark);
  }

  getAverageMar() {
    if (!this.status) {
      return "Цей студент не навчається або був виключений з закладу";
    }
    const avg =
      this.marks.reduce((initialValue, currentValue) => {
        return initialValue + currentValue;
      }, 0) / this.marks.length;
    return avg;
  }

  dismiss() {
    this.storedMarks = [].concat(this.marks);
    this.status = false;
    this.marks = null;
  }

  recover() {
    this.status = true;
    this.marks = this.storedMarks;
  }
}

// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Остап Родоманський Бендер"
);

console.log(
  `2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
ostap.getInfo()`,
  ostap.getInfo()
);

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
ostap.marks = [5, 4, 4, 5];
console.log(
  `3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
ostap.studentMarks`,
  ostap.studentMarks
);

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
ostap.studentMarks = 5;
console.log(
  `4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
ostap.studentMarks`,
  ostap.studentMarks
);

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
console.log(
  `5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
ostap.getAverageMar()`,
  ostap.getAverageMar()
);

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
ostap.dismiss();
console.log(
  `6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
  ostap.dismiss()
  ostap.marks`,
  ostap.marks
);

// 7. Створіть метод this.recover, який дозволить поновити студента
ostap.recover();
console.log(
  `7. Створіть метод this.recover, який дозволить поновити студента
ostap.recover()
ostap.marks`,
  ostap.marks
);

// Advanced
// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// osyp.getScholarship();
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => {
      this.getScholarship();
    }, 30000);
  }

  getScholarship() {
    if (this.getAverageMar() >= 4 && this.marks) {
      console.log("Ви отримали 1400 грн. стипендії");
    }
  }
}

const osyp = new BudgetStudent("КПІ", 4, "Осип Беньямінович Шор");
osyp.marks = [4, 5, 5, 5];

console.log(
  `Advanced:
Бюджетний студент:`,
  osyp.getInfo(),
  "з оцінками:",
  osyp.marks
);

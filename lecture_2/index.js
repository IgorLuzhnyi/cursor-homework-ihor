// N number
let n = +prompt("Enter FIRST number");

while (!n) {
  n = +prompt("Enter FIRST number");
}

n = Math.trunc(n);

console.log("First number is " + n);

// M number
let m = +prompt("Enter SECOND number. It should be hight than first");

while (!m || m <= n) {
  m = +prompt("Enter SECOND number. It should be higher than first");
}

m = Math.trunc(m);

console.log("Second number is " + m);

// Miss even?
const missEven = confirm("Miss even?");

// Cycle of adding numbers
let count = 0;

for (let i = n; i <= m; i++) {
  if (!missEven) {
    count += i;
    // console.log(count);
  } else {
    if (i % 2 === 0) continue;
    count += i;
    // console.log(count);
  }
}

console.log("Total count is " + count);
document.writeln(
  `Перше число - ${n}, друге число - ${m}, сума всіх - ${count}`
);

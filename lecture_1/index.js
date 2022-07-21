const banana = 15.678;
const shrimp = 123.965;
const cheese = 90.2345;

console.log("JS code runs");

const sum = banana + shrimp + cheese;
const floorIntSum = Math.floor(sum);
const discount = Math.random().toFixed(2);

const html = `
    <p>Максимальне число: ${Math.max(banana, shrimp, cheese)}</p>
    <p>Мінімальне число: ${Math.min(banana, shrimp, cheese)}</p>
    <p>Сума всіх товарів: ${sum}</p>
    <p>Сума всіх товарів (з округленням в меншу сторону): ${floorIntSum}</p>
    <p>Сума товарів округлена до сотень: ${Math.round(sum / 100) * 100}</p>
    <p>Сума товарів парне число? ${floorIntSum % 2 === 0 ? true : false}</p>
    <p>Сума решти при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${
      500 - sum
    }</p>
    <p>Середнє значення цін, округлене до другого знаку після коми: ${(
      sum / 3
    ).toFixed(2)}</p>
    <p>Випадкова знижка: ${discount * 100}%</p>
    <p>Сума до оплати з випадковою знижкою: ${(sum - discount * sum).toFixed(
      2
    )}</p>
    <p>Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни: ${
      -(sum / 2) + (sum - discount * sum)
    }</p>
`;

const body = document.querySelector("body");
body.insertAdjacentHTML("beforeend", html);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

// @ts-check

function solution() {
  const tc = +input[0];
  const arr = input.slice(1).map(Number);
  const apartment = Array.from(Array(15), _ => Array(15).fill(0));
  apartment[0] = apartment[0].map((_, idx) => +idx);
  for (let i = 1; i <= 14; ++i) {
    let sum = 0;
    for (let j = 1; j <= 14; ++j) {
      sum += apartment[i - 1][j];
      apartment[i][j] = sum;
    }
  }
  const ans = [];
  for (let t = 0; t < tc; ++t) {
    const i = arr[2 * t];
    const j = arr[2 * t + 1];
    ans.push(apartment[i][j]);
  }
  console.log(ans.join('\n'));
}

// 6
// 5
// 4
// 3
// 2
// 1   1   3   6  10  15  21  28
// 0   1   2   3   4   5   6   7

//     1   2   3   4 . 5 . 6 . 7 . 8 . 9 . 10  11  12  13
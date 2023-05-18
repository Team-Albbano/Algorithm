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
  const n = +input[0];
  if (n === 1) {
      console.log(1);
      return;
  }
  let cnt = 1;
  let sum = 1;
  while (true) {
    if (n <= (sum += (6 * (cnt)))) {
      break;
    }
    ++cnt;
  }
  console.log(cnt + 1);
}

//  1 // 1
//  2  3  4  5  6  7 // 6 | (6 * 1 + 1) 1 |  6
//  8  9 10 11 12 13 14 15 16 17 18 19 // 12 | (6 * 3 + 1) 3 | 12
// 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 // 18 | (6 * 5 + 1) 5 | 18
// 38 ... 61 (6 * 10 + 1) 10 | 24

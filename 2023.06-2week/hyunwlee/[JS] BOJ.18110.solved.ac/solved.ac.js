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

function solution() {
  const [n, ...arr] = input.map(Number);
  if (n === 0) {
    console.log(0);
    return ;
  }
  const sortedArr = arr.sort((a, b) => (a - b));
  const cnt = Math.round(n * 0.15);
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    if (i < cnt) continue;
    if (n - i <= cnt) continue;
    sum += sortedArr[i];
  }
  console.log(Math.round(sum / (n - 2 * cnt)));
}
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
  const n = Number(input[0]);
  const memo = Array.from({length: n + 1}, () => 0);
  memo[1] = 1;
  for (let i = 2; i <= n; ++i) {
    memo[i] = 4;
    for (let j = 1; j * j <= i; ++j) {
      memo[i] = Math.min(memo[i], memo[i - j * j] + 1);
    }
  }
  console.log(memo[n]);
}


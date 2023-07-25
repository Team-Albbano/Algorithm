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
  const n = +input[0];
  const memo = Array.from({length: n + 1}, _ => 0);
  topDown(n, memo);
  console.log(memo[n]);
}

function topDown(n, memo) {
  if (memo[n] > 0)
    return  (memo[n]);
  if (n === 0)
    return 0;
  if (n === 1)
    return (memo[1] = 0);
  if (n === 2)
    return (memo[2] = 1);
  if (n === 3)
    return (memo[3] = 1);
  if (n % 6 === 0) {
    return (memo[n] = Math.min(topDown((n / 3), memo), Math.min(topDown((n / 2), memo), topDown((n - 1), memo))) + 1);
  }
  if (n % 3 === 0) {
    return (memo[n] = Math.min(topDown((n / 3), memo), topDown((n - 1), memo)) + 1);
  }
  if (n % 2 === 0) {
    return (memo[n] = Math.min(topDown((n / 2), memo), topDown((n - 1), memo)) + 1);
  }
  return (memo[n] = topDown((n - 1), memo) + 1);
}

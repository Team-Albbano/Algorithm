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
  const memo = Array.from(Array(41),  _ => Array(2).fill(0));
  const [, ...arr] = input.map(Number);
  let ans = '';
  fibonacci(40, memo);
  arr.forEach(item => ans += memo[item][0] + ' ' + memo[item][1] + '\n');
  console.log(ans);
}

function fibonacci(n, memo) {
  if (n === 0) {
    memo[0][0] = 1;
    memo[0][1] = 0;
    return memo[0];
  }
  if (n === 1) {
    memo[1][0] = 0;
    memo[1][1] = 1;
    return memo[1];
  }
  if (memo[n][0] > 0 || memo[n][1] > 0) {
    return memo[n];
  }
  memo[n][0]  = fibonacci(n - 1, memo)[0] + fibonacci(n - 2, memo)[0];
  memo[n][1]  = fibonacci(n - 1, memo)[1] + fibonacci(n - 2, memo)[1];
  return memo[n];
}

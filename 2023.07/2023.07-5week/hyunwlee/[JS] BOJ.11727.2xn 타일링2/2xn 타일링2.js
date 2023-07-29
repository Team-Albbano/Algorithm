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
  const memo = Array.from({length: 1001}, _ => 0);
  console.log(topDown(memo, n));
}

// d[n] = 2 * d[n - 2] + d[n - 1];
function topDown(memo, n) {
  if (memo[n] > 0) {
    return memo[n];
  }
  if (n === 1) {
    return memo[1] = 1;
  }
  if (n === 2) {
    return memo[2] = 3;
  }
  memo[n] = topDown(memo, n - 1) % 10007 + 2 * topDown(memo, n - 2) % 10007;
  return memo[n] % 10007;
}

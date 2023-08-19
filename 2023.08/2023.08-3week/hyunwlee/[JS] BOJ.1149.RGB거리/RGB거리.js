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
  const [n, ...lines] = input;
  const arr = lines.map(line => (
    line.split(' ').map(Number)
  ));
  const memo = Array.from(Array(Number(n)), () => Array(3).fill(0));
  const first = topDown(n - 1, 0, arr, memo);
  const second = topDown(n - 1, 1, arr, memo);
  const third =topDown(n - 1, 2, arr, memo);
  console.log(Math.min(first, Math.min(second, third)));
}

function topDown(i, j, arr, memo) {
  if (memo[i][j] > 0)
    return (memo[i][j]);
  if (i === 0) {
    return memo[i][j] = arr[i][j];
  }
  if (j === 0)
    memo[i][j] = Math.min(topDown(i - 1, 1, arr, memo), topDown(i - 1, 2, arr, memo)) + arr[i][j];
  else if (j === 1)
    memo[i][j] = Math.min(topDown(i - 1, 0, arr, memo), topDown(i - 1, 2, arr, memo)) + arr[i][j];
  else if (j === 2)
    memo[i][j] = Math.min(topDown(i - 1, 0, arr, memo), topDown(i - 1, 1, arr, memo)) + arr[i][j];
  return memo[i][j];
}

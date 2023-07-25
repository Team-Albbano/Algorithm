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
  const [n, k] = input[0].split(' ').map(Number);
  // const cache = Array(n + 1).fill(Array(k + 1).fill(0));
  const cache = Array.from((Array(n + 1)), _ => Array(k + 1).fill(0));
  console.log(topDown(n, k, cache));
}

function topDown(n, k, cache) {
  if (cache[n][k] > 0)
    return cache[n][k];
  if (n < k)
    return 0;
  if (k === n || k === 0)
    return 1;
  cache[n][k] = topDown(n - 1, k, cache) + topDown(n - 1, k - 1, cache);
  return cache[n][k];
}
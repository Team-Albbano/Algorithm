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

let steps = null;
let memo = null;
function solution() {
  const [n, ...arr] = input;
  steps = Array.from({length: n + 1}, _ => 0);
  arr.forEach((item, idx) => {
    steps[idx + 1] = Number(item);
  });
  memo = Array.from({length: n + 1}, _ => 0);
  topDown(Number(n));
  console.log(memo[Number(n)]);
}

function topDown(n) {
  if (memo[n] > 0)
    return (memo[n]);
  if (n === 0)
    return 0;
  if (n === 1)
    return (memo[1] = steps[1]);
  if (n === 2)
    return (memo[2] = steps[1] + steps[2]);
  memo[n] = Math.max((steps[n] + steps[n - 1] + topDown(n - 3)), (steps[n] + topDown(n - 2)));
  return memo[n];
}

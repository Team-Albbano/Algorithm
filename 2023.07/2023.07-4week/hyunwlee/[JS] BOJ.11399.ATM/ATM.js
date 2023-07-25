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

// 3 1 4 3 2
// 1 2 3 3 4
// 1 3 6 9 13
function solution() {
  const arr = input[1].split(' ').map(Number).sort((a, b) => (a - b));
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    ans += sum += arr[i];
  }
  console.log(ans);
}

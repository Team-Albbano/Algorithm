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
  const arr = input[1].split(' ').map(Number);
  const prime = [];
  const check = Array.from({length: 1001}, _ => false);
  check[0] = true;
  check[1] = true;
  for (let i = 2; i <= 1000; ++i) {
    if (check[i]) continue;
    prime.push(i);
    for (let j = i * i; j <= 1000; j += i) {
      check[j] = true;
    }
  }
  let ans = 0;
  arr.forEach(item => {
    if (!check[item])
      ++ans;
  })
  console.log(ans);
}
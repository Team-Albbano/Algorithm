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
  const [m, n] = input[0].split(' ').map(Number);
  const prime = Array.from({length: n}, _ => 0);
  let pn = 0;
  const check = Array.from({length: n + 1}, _ => false);

  for (let i = 2; i <= n; ++i) {
    if (check[i]) continue;
    prime[pn++] = i;
    for (let j = i * i; j <= n; j += i) {
      check[j] = true;
    }
  }
  const ans = prime.filter(item => (m <= item && item <= n)).join('\n');
  console.log(ans);
}
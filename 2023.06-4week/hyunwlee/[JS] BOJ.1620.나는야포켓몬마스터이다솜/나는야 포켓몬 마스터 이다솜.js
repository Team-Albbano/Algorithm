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
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  const map = new Map();
  for (let i = 1; i <= n; ++i) {
    map.set(String(i), arr[i - 1]);
    map.set(arr[i - 1], String(i));
  };
  let ans = '';
  for (let i = n; i < n + m; ++i) {
    ans += map.get(arr[i]) + '\n';
  }
  console.log(ans);
}

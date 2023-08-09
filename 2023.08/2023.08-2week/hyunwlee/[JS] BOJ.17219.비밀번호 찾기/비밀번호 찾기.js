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
  const accountMap = new Map();
  let ans = '';
  arr.splice(0, n).forEach(line => {
    const [key, value] = line.split(' ');
    accountMap.set(key, value);
  })
  arr.forEach((key) => {
    ans += accountMap.get(key) + '\n';
  })
  console.log(ans);
}

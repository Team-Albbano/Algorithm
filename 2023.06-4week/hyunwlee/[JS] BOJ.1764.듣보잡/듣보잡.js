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
  let i = 0;
  arr.forEach((item) => {
    if (map.has(item))
      map.set(item, 2);
    else
      map.set(item, 1);
  });
  let ans = [];
  for ([key, value] of map.entries()) {
    if (value === 2) ans.push(key);
  }
  console.log(ans.length);
  ans = ans.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  console.log(ans.join('\n'));
}

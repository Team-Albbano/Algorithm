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
  const [_, _arr] = input;
  const arr = _arr.split(' ').map(Number);
  const sortedArr = _arr.split(' ').map(Number).sort((a, b) => (a - b));
  const map = new Map();
  let idx = 0;
  sortedArr.forEach(item => {
    if (!map.has(item))
      map.set(item, idx++);
  });
  let ans = '';
  arr.forEach(item => {
    ans += map.get(item) + ' ';
  });
  console.log(ans);
}

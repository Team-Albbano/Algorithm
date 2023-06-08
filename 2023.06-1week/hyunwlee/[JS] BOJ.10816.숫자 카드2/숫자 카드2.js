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
  const firstArr = input[1].split(' ').map(Number);
  const secondArr = input[3].split(' ').map(Number);
  const map = new Map();
  firstArr.forEach(item => {
    (!map.has(item)) ? map.set(item, 1) : map.set(item, map.get(item) + 1);
  })
  let ans = '';
  secondArr.forEach(item => {
    ans += ((map.has(item)) ? map.get(item) : 0) + ' ';
  })
  console.log(ans);
}
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
  const [x, y, w, h] = input[0].split(" ").map(Number);
  const distances = [];
  distances.push(x);
  distances.push(y);
  distances.push(w - x);
  distances.push(h - y);
  const result = distances.reduce((min, curr) => Math.min(min, curr), 1000);
  console.log(result);
}

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

// @ts-check

function solution() {
  const arr = input.splice(0, input.length - 1);
  let ans = '';
  arr.forEach((item) => {
    const [a, b, c] = item.split(' ').map(Number).sort((a, b) => (a - b));
    if (a * a + b * b === c * c)
      ans += 'right\n';
    else
      ans += 'wrong\n';
  })
  console.log(ans);
}
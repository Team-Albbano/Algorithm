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
  const arr = input.filter((_, idx) => idx !== 0).map(Number);
  const stack = [];
  let idx = 0;
  let jdx = 0;
  let ans = "";
  while (++idx <= n) {
    stack.push(idx);
    ans += "+\n";
    if (idx === arr[jdx]) {
      while (stack.length > 0 && stack[stack.length - 1] === arr[jdx]) {
        stack.pop();
        ans += "-\n";
        ++jdx;
      }
    }
  }
  if (stack.length > 0) {
    console.log("NO");
    return;
  }
  console.log(ans);
}

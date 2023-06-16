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

let min = 0;
function solution() {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const arr = (m === 0) ? [] : input[2].split(' ').map(Number);
  const valuableArr = '0123456789'.split('')
                                  .map(Number)
                                  .filter(item => (arr.indexOf(item) === -1));
  min = Math.abs(n - 100);
  recurse(0, valuableArr, n, '');
  console.log(min)
}
function recurse(depth, valuableArr, target, str) {
  if (depth === 6) {
    min = Math.min(min, Math.abs(target - Number(str)) + String(Number(str)).length);
    return ;
  }
  valuableArr.forEach(num => {
    str += num;
    recurse(depth + 1, valuableArr, target, str);
    str = str.slice(0, str.length - 1);
  });
}

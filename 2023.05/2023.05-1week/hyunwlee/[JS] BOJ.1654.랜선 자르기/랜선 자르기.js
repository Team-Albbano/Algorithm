const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const [k, target] = input[0].split(" ").map(Number);
  const arr = input.filter((item, idx) => idx !== 0);
  console.log(parametricSearch(1, 2147483647, arr, target, -1));
}

function parametricSearch(left, right, arr, target, result) {
  if (left > right) return result;
  let mid = Math.floor((left + right) / 2);
  const val = arr.reduce((sum, cur) => sum + Math.floor(cur / mid), 0);
  if (val < target) return parametricSearch(left, mid - 1, arr, target, result);
  else {
    result = mid;
    return parametricSearch(mid + 1, right, arr, target, result);
  }
}

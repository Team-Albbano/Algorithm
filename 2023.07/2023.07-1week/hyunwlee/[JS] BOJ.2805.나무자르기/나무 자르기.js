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
  const [n, m] = input[0].split(' ');
  const arr = input[1].split(' ').map(Number);
  console.log(parametricSearch(1, 2000000001, arr, 0, m));
}

function parametricSearch(start, end, arr, curr, target) {
  if (start > end) {
    return curr;
  }
  const mid = Math.floor((start + end) / 2);
  const total = arr.reduce((cal, cur) => (cal + ((cur - mid > 0) ? cur - mid : 0)), 0);
  if (total < target) { // 높이를 낮춰야 할 것 같아
    return parametricSearch(start, mid - 1, arr, curr, target);
  }
  else if (total === target) { // 어떻게 딱 맞췄네, 환경을 고려해 좀더 높이좀 높여볼까?
    curr = mid;
    return parametricSearch(mid + 1, end, arr, curr, target);
  }
  else { // 높이좀 높여서 더 total이 커지게
    curr = mid;
    return parametricSearch(mid + 1, end, arr, curr, target);
  }
}

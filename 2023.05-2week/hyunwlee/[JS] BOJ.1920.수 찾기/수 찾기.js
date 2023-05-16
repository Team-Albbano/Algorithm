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
  const targetArr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = +input[2];
  const arr = input[3].split(" ").map(Number);
  let ans = "";
  arr.forEach((item) => {
    if (binarySearch(0, targetArr.length - 1, item, targetArr) === -1)
      ans += "0\n";
    else ans += "1\n";
  });
  console.log(ans);
}

function binarySearch(start, end, target, targetArr) {
  if (start > end) return -1;
  else if (start === end) {
    if (targetArr[start] === target) return start;
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (targetArr[mid] === target) return mid;
  else if (targetArr[mid] < target)
    return binarySearch(mid + 1, end, target, targetArr);
  else if (targetArr[mid] > target)
    return binarySearch(start, mid - 1, target, targetArr);
}

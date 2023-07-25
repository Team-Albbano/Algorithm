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
  const [nk, ...arr] = input;
  const [n, k] = nk.split(' ').map(Number);
  const coinArr = arr.map(Number);
  let currK = k;
  let idx = parametricSearch(0, n, coinArr, k, -1);
  let ans = 0;
  while (currK > 0 && idx >= 0) {
    while (currK - coinArr[idx] >= 0) {
      currK -= coinArr[idx];
      ++ans;
    }
    --idx;
  }
  console.log(ans);
}

function parametricSearch(start, end, arr, target, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] <= target) {
    return parametricSearch(mid + 1, end, arr, target, mid);
  }
  else {
    return parametricSearch(start, mid - 1, arr, target, result);
  }
}

// 4200
// 1000 1000
// 1000 2000
// 1000 3000
// 1000 4000
// 100  4100
// 100  4200 6

// 4790
// 1000 1000
// 1000 2000
// 1000 3000
// 1000 4000
// 500  4500
// 100  4600
// 100  4700
// 50   4750
// 10   4760
// 10   4770
// 10   4780
// 10   4790 12

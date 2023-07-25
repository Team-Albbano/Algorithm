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

let ans = 0;

function solution() {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = Array.from({length: n}, _ => 0);
  const weightArr = input[1].split(' ').map(Number);
  recurse(0, arr, n, m, 0, weightArr);
  console.log(ans);
}

/**
 * 
 * @param {number} depth 깊이
 * @param {Array.<number>} arr 선택된 카드를 표시할 배열
 * @param {number} n 카드의 개수
 * @param {number} m 한도 숫자
 * @param {number} cnt 선택된 카드 개수
 * @param {Array.<number>} weightArr 카드에 쓰여 있는 수들
 * @returns void
 */
function recurse(depth, arr, n, m, cnt, weightArr) {
  if (cnt > 3 || depth > n) {
    return ;
  }
  if (depth === n) {
    if (cnt === 3) {
      const value = weightArr.reduce((cal, cur, idx) => (
        arr[idx] ? cal + cur : cal
      ), 0);
      if (value > m)
        return ;
      ans = Math.max(value, ans);
    }
    return ;
  }

  for (let i = 0; i <= 1; ++i) {
    arr[depth] = i;
    if (i === 0)
      recurse(depth + 1, arr, n, m, cnt, weightArr);
    else 
      recurse(depth + 1, arr, n, m, cnt + 1, weightArr);
  }
}
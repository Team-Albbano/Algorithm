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
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);
  const answer = parametricSearch(0, 1000000000, arr, m, 0);
  console.log(answer);
}

/**
 * 
 * @param {number} start 절단기 최소범위
 * @param {number} end 절단기 최대범위
 * @param {Array.<number>} arr 벌목허가된 집 근처 나무들 크기
 * @param {number} target 적어도 이만큼은 가져가겠다.
 * @param {number} result 결과 상태관리에 필요한 변수
 * @returns number 절단기 최댓값 높이
 */
function parametricSearch(start, end, arr, target, result) {
  if (start > end)
    return result;
  const mid = Math.floor((start + end) / 2);
  const val = arr.reduce((cal, cur) => (cal + ((cur - mid > 0) ? cur - mid : 0)), 0);
  if (val < target) {
    return parametricSearch(start, mid - 1, arr, target, result);
  }
  else if (val >= target) {
    result = Math.max(result, mid);
    return parametricSearch(mid + 1, end, arr, target, result);
  }
}
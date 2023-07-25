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
  const [a, b, v] = input[0].split(' ').map(Number);
  console.log(parametricSearch(1, 1000000000, v, 0, a, b));
}

function parametricSearch(start, end, target, result, a, b) {
  if (start > end) {
    return result;
  }
  let mid = Math.floor((start + end) / 2);
  let val = calDay(mid, target, a, b);
  if (val === -1) // 기준을 높이자
    return parametricSearch(mid + 1, end, target, result, a, b);
  else if (val <= mid) { // 기준을 더 줄여보자, 이게 정답일 수도 있고
    result = mid;
    return parametricSearch(start, mid - 1, target, result, a, b);
  }
}

function calDay(day, target, a, b) {
  let move = (a - b) * day + b;
  // current: 현재날 만큼 올라갔어, 하지만 오늘 떨어질만큼은 안떨어졌지
  if (move >= target) // 목표치 이상을 달성했니? 그래도 하루 -1 해, 못미더워서
    return day - 1; // 하루 전날 ㄱㄱ
  move -= b; 
  if (move >= target) // 뺏는데도 목표치 이상을 달성했다고?
    return day; // 당일날 ㄱㄱ
  return -1; // 한참 적은듯 더 기준을 높여봐야겠다.
}
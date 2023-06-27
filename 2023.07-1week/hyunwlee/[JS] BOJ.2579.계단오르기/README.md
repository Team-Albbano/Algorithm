# [JS] BOJ 2178/미로 탐색

[문제 링크](https://www.acmicpc.net/problem/2178)

<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

```javascript
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

let steps = null;
let memo = null;
function solution() {
  const [n, ...arr] = input;
  steps = Array.from({length: n + 1}, _ => 0);
  arr.forEach((item, idx) => {
    steps[idx + 1] = Number(item);
  });
  memo = Array.from({length: n + 1}, _ => 0);
  topDown(Number(n));
  console.log(memo[Number(n)]);
}

function topDown(n) {
  if (memo[n] > 0)
    return (memo[n]);
  if (n === 0)
    return 0;
  if (n === 1)
    return (memo[1] = 1);
  if (n === 2)
    return (memo[2] = steps[1] + steps[2]);
  memo[n] = Math.max((steps[n] + steps[n - 1] + topDown(n - 3)), (steps[n] + topDown(n - 2)));
  return memo[n];
}
```

## 소요시간
40분

## 어려웠던 점

## 배운 점

## 궁금한 점

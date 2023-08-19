# [JS] BOJ 1149/RGB거리

[문제 링크](https://www.acmicpc.net/problem/1149)

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

function solution() {
  const [n, ...lines] = input;
  const arr = lines.map(line => (
    line.split(' ').map(Number)
  ));
  const memo = Array.from(Array(Number(n)), () => Array(3).fill(0));
  const first = topDown(n - 1, 0, arr, memo);
  const second = topDown(n - 1, 1, arr, memo);
  const third =topDown(n - 1, 2, arr, memo);
  console.log(Math.min(first, Math.min(second, third)));
}

function topDown(i, j, arr, memo) {
  if (memo[i][j] > 0)
    return (memo[i][j]);
  if (i === 0) {
    return memo[i][j] = arr[i][j];
  }
  if (j === 0)
    memo[i][j] = Math.min(topDown(i - 1, 1, arr, memo), topDown(i - 1, 2, arr, memo)) + arr[i][j];
  else if (j === 1)
    memo[i][j] = Math.min(topDown(i - 1, 0, arr, memo), topDown(i - 1, 2, arr, memo)) + arr[i][j];
  else if (j === 2)
    memo[i][j] = Math.min(topDown(i - 1, 0, arr, memo), topDown(i - 1, 1, arr, memo)) + arr[i][j];
  return memo[i][j];
}
```

## 소요시간
20분

## 어려웠던 점

## 배운 점

## 궁금한 점

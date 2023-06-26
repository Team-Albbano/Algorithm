# [JS] BOJ 1463/1로 만들기

[문제 링크](https://www.acmicpc.net/problem/1463)

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
  const n = +input[0];
  const memo = Array.from({length: n + 1}, _ => 0);
  topDown(n, memo);
  console.log(memo[n]);
}

function topDown(n, memo) {
  if (memo[n] > 0)
    return  (memo[n]);
  if (n === 0)
    return 0;
  if (n === 1)
    return (memo[1] = 0);
  if (n === 2)
    return (memo[2] = 1);
  if (n === 3)
    return (memo[3] = 1);
  if (n % 6 === 0) {
    return (memo[n] = Math.min(topDown((n / 3), memo), Math.min(topDown((n / 2), memo), topDown((n - 1), memo))) + 1);
  }
  if (n % 3 === 0) {
    return (memo[n] = Math.min(topDown((n / 3), memo), topDown((n - 1), memo)) + 1);
  }
  if (n % 2 === 0) {
    return (memo[n] = Math.min(topDown((n / 2), memo), topDown((n - 1), memo)) + 1);
  }
  return (memo[n] = topDown((n - 1), memo) + 1);
}
```

## 소요시간

60분 + 이전 풀이봄

## 어려웠던 점

dp이면서 Math.min을 이용하여 최소인 부분을 가져가도록 메모이제이션을 생각해내는게 어려웠음

## 배운 점

## 궁금한 점

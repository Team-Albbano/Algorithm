# [JS] BOJ 1003/피보나치 함수

[문제 링크](https://www.acmicpc.net/problem/1003)

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
  const memo = Array.from(Array(41),  _ => Array(2).fill(0));
  const [, ...arr] = input.map(Number);
  let ans = '';
  fibonacci(40, memo);
  arr.forEach(item => ans += memo[item][0] + ' ' + memo[item][1] + '\n');
  console.log(ans);
}

function fibonacci(n, memo) {
  if (n === 0) {
    memo[0][0] = 1;
    memo[0][1] = 0;
    return memo[0];
  }
  if (n === 1) {
    memo[1][0] = 0;
    memo[1][1] = 1;
    return memo[1];
  }
  if (memo[n][0] > 0 || memo[n][1] > 0) {
    return memo[n];
  }
  memo[n][0]  = fibonacci(n - 1, memo)[0] + fibonacci(n - 2, memo)[0];
  memo[n][1]  = fibonacci(n - 1, memo)[1] + fibonacci(n - 2, memo)[1];
  return memo[n];
}
```

## 소요시간

40분

## 어려웠던 점


## 배운 점

## 궁금한 점

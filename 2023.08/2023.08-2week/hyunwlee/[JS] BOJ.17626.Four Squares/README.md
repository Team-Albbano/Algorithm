# [JS] BOJ 17626/Four Squares

[문제 링크](https://www.acmicpc.net/problem/17626)

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
  const n = Number(input[0]);
  const memo = Array.from({length: n + 1}, () => 0);
  memo[1] = 1;
  for (let i = 2; i <= n; ++i) {
    memo[i] = 4;
    for (let j = 1; j * j <= i; ++j) {
      memo[i] = Math.min(memo[i], memo[i - j * j] + 1);
    }
  }
  console.log(memo[n]);
}
```

## 소요시간
이전 풀이 봄

## 어려웠던 점

## 배운 점
가장 측근 제곱근의 memo값 계산 법

## 궁금한 점

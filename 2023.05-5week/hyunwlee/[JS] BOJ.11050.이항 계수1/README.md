# [JS] BOJ 11050/이항 계수1

[문제 링크](https://www.acmicpc.net/problem/11050)

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
  const [n, k] = input[0].split(" ").map(Number);
  // const cache = Array(n + 1).fill(Array(k + 1).fill(0));
  const cache = Array.from(Array(n + 1), (_) => Array(k + 1).fill(0));
  console.log(topDown(n, k, cache));
}

function topDown(n, k, cache) {
  if (cache[n][k] > 0) return cache[n][k];
  if (n < k) return 0;
  if (k === n || k === 0) return 1;
  cache[n][k] = topDown(n - 1, k, cache) + topDown(n - 1, k - 1, cache);
  return cache[n][k];
}
```

## 소요시간

20분

## 어려웠던 점

2차원 배열만드는 법은 일관적이지 않아서 헷갈린다 항상

## 배운 점

이항 계수, nCk = n-1Ck + n-1Ck-1

<img width="357" alt="스크린샷 2023-06-01 오전 10 51 12" src="https://github.com/MofMof-KR/MofMof-FE/assets/55472696/a6e8d4e2-bd1e-48b3-9393-dd86cb293649">

## 궁금한 점

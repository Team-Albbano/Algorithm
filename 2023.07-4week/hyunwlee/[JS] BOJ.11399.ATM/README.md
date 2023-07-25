# [JS] BOJ 11399/ATM

[문제 링크](https://www.acmicpc.net/problem/11399)

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

// 3 1 4 3 2
// 1 2 3 3 4
// 1 3 6 9 13
function solution() {
  const arr = input[1].split(' ').map(Number).sort((a, b) => (a - b));
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    ans += sum += arr[i];
  }
  console.log(ans);
}
```
## 소요시간
5분

## 어려웠던 점

## 배운 점

## 궁금한 점

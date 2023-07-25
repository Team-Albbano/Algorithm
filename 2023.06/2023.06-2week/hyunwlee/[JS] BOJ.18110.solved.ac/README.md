# [JS] BOJ 18110/solved.ac

[문제 링크](https://www.acmicpc.net/problem/18110)

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
  const [n, ...arr] = input.map(Number);
  if (n === 0) {
    console.log(0);
    return;
  }
  const sortedArr = arr.sort((a, b) => a - b);
  const cnt = Math.round(n * 0.15);
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    if (i < cnt) continue;
    if (n - i <= cnt) continue;
    sum += sortedArr[i];
  }
  console.log(Math.round(sum / (n - 2 * cnt)));
}
```

## 소요시간

10분

## 어려웠던 점

양쪽 불필요한 배열원소를 pop()과 shift()하면 시간초과가 나니까 지울 필요없이 무시하고 선행시간에 맞게 돌린다.

## 배운 점

## 궁금한 점

# [JS] BOJ 14500/테트로미노

[문제 링크](https://www.acmicpc.net/problem/14500)

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
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  const map = arr.map(lines => 
    lines.split(' ').map(Number)
  );
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      // oxxx
      if (j + 3 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i][j + 3];
        sum = Math.max(sum, value);
      } 
      // o
      // x
      // x
      // x
      if (i + 3 < n) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 3][j];
        sum = Math.max(sum, value);
      }
      // ox
      // xx
      if (i + 1 < n && j + 1 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 1][j + 1];
        sum = Math.max(sum, value);
      }
      // o 
      // x 
      // xx
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 2][j + 1];
        sum = Math.max(sum, value);
      }
      //  o
      //  x
      // xx
      if (i + 2 < n && j - 1 >= 0) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 2][j - 1];
        sum = Math.max(sum, value);
      }
      // oxx
      // x
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j];
        sum = Math.max(sum, value);
      }
      // oxx
      //   x
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 2];
        sum = Math.max(sum, value);
      }
      // ox
      //  x
      //  x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1];
        sum = Math.max(sum, value);
      }
      // ox
      // x
      // x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 2][j];
        sum = Math.max(sum, value);
      }
      //   x
      // oxx
      if (i - 1 >= 0 && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i - 1][j + 2];
        sum = Math.max(sum, value);
      }
      // o
      // xxx
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2];
        sum = Math.max(sum, value);
      }
      // ox
      //  xx
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 1][j + 2];
        sum = Math.max(sum, value);
      }
      //  xx
      // ox
      if (i - 1 >= 0 && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i - 1][j + 1] + map[i - 1][j + 2];
        sum = Math.max(sum, value);
      }
      //  o
      // xx
      // x
      if (i + 2 < n && j - 1 >= 0) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j - 1] + map[i + 2][j - 1];
        sum = Math.max(sum, value);
      }
      // o
      // xx
      //  x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 2][j + 1];
        sum = Math.max(sum, value);
      }
      // oxx
      //  x
      if (i + 1 < n && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 1];
        sum = Math.max(sum, value);
      }
      //  o
      // xx
      //  x
      if (i + 2 < n && j - 1 >= 0) {
        const value = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 1][j - 1];
        sum = Math.max(sum, value);
      }
      //  x
      // oxx
      if (i - 1 >= 0 && j + 2 < m) {
        const value = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i - 1][j + 1];
        sum = Math.max(sum, value);
      }
      // o
      // xx 
      // x
      if (i + 2 < n && j + 1 < m) {
        const value = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 2][j];
        sum = Math.max(sum, value);
      }
    }
  }
  console.log(sum);
}
```
## 소요시간
40분

## 어려웠던 점
회전뿐만 아니라 축의 반전 케이스까지

## 배운 점

## 궁금한 점


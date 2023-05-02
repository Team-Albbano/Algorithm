# [JS] BOJ 1085/직사각형에서 탈출

[문제 링크](https://www.acmicpc.net/problem/1085)

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

<img width="649" alt="스크린샷 2023-05-01 오후 5 41 10" src="https://user-images.githubusercontent.com/55472696/235431234-f8e405bb-ccec-4e58-ac22-ff9da0a178f5.png">    
빨간 선중 가장 최단거리를 구하는 문제이다.

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
  const [x, y, w, h] = input[0].split(" ").map(Number);
  const distances = [];
  distances.push(x);
  distances.push(y);
  distances.push(w - x);
  distances.push(h - y);
  const result = distances.reduce((min, curr) => Math.min(min, curr), 1000);
  console.log(result);
}
```

## 소요시간

10분

## 어려웠던 점

## 배운 점

## 궁금한 점

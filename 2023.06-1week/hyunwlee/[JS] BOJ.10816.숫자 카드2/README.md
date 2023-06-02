# [JS] BOJ 10816/숫자 카드2

[문제 링크](https://www.acmicpc.net/problem/10816)

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
  const firstArr = input[1].split(" ").map(Number);
  const secondArr = input[3].split(" ").map(Number);
  const map = new Map();
  firstArr.forEach((item) => {
    !map.has(item) ? map.set(item, 1) : map.set(item, map.get(item) + 1);
  });
  let ans = "";
  secondArr.forEach((item) => {
    ans += (map.has(item) ? map.get(item) : 0) + " ";
  });
  console.log(ans);
}
```

## 소요시간

5분

## 어려웠던 점

## 배운 점

## 궁금한 점

# [JS] BOJ 1436/영화감독 숌

[문제 링크](https://www.acmicpc.net/problem/1436)

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
  solution(input);
  process.exit();
});

function solution(input) {
  const n = +input[0];
  let ans = 666;
  let cnt = 1;

  while (cnt !== n) {
    ++ans;
    if (String(ans).includes("666")) ++cnt;
  }
  console.log(ans);
}
```

## 소요시간

X, 해설 봄

## 어려웠던 점

문제를 이해하는게 어려울 뿐더러, 어떻게 접근해야할지 조차 몰랐었다.

## 배운 점

## 궁금한 점

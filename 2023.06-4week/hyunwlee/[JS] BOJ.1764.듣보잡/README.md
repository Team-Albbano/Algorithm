# [JS] BOJ 1764/듣보잡

[문제 링크](https://www.acmicpc.net/problem/1764)

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
  const map = new Map();
  let i = 0;
  arr.forEach((item) => {
    if (map.has(item))
      map.set(item, 2);
    else
      map.set(item, 1);
  });
  let ans = [];
  for ([key, value] of map.entries()) {
    if (value === 2) ans.push(key);
  }
  console.log(ans.length);
  ans = ans.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  console.log(ans.join('\n'));
}
```

## 소요시간
10분

## 어려웠던 점

## 배운 점

## 궁금한 점

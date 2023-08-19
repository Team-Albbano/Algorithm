# [JS] BOJ 18870/좌표 압축

[문제 링크](https://www.acmicpc.net/problem/18870)

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
  const [_, _arr] = input;
  const arr = _arr.split(' ').map(Number);
  const sortedArr = _arr.split(' ').map(Number).sort((a, b) => (a - b));
  const map = new Map();
  let idx = 0;
  sortedArr.forEach(item => {
    if (!map.has(item))
      map.set(item, idx++);
  });
  let ans = '';
  arr.forEach(item => {
    ans += map.get(item) + ' ';
  });
  console.log(ans);
}
```

## 소요시간
20분

## 어려웠던 점

## 배운 점

## 궁금한 점

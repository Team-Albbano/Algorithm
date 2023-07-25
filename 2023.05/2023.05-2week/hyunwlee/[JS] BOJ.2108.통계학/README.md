# [JS] BOJ 2108/통계학

[문제 링크](https://www.acmicpc.net/problem/2108)

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
cconst readline = require("readline");
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
  const n = +input[0];
  const arr = input.map(Number).filter((_, idx) => (idx !== 0));
  const sortedArr = arr.sort((a, b) => (a - b));
  const sum = Math.round(arr.reduce((cal, cur) => (cal += cur), 0) / n);
  console.log(sum === -0 ? 0 : sum);
  console.log(sortedArr[Math.floor(n / 2)])
  console.log(choibin(arr));
  console.log(Math.abs(sortedArr[n - 1] - sortedArr[0]));
}

function choibin(arr) {
  const map = new Map();
  arr.forEach(item => {
    if (map.has(item)) {
      const updatedVal = map.get(item) + 1;
      map.set(item, updatedVal);
    }
    else 
      map.set(item, 1);
  });
  const max = Array.from(map.values()).reduce((cal, cur) => (Math.max(cal, cur)), Number.MIN_VALUE);
  const sortedMapByValue = Array.from(map.entries())
  .sort((a, b) => {
    if (a[1] < b[1])
      return 1;
    if (a[1] > b[1])
      return -1;
    return a[0] - b[0];
  })
  .filter((item) => (item[1] === max));
  if (sortedMapByValue.length > 1)
    return sortedMapByValue[1][0];
  return sortedMapByValue[0][0];
}
```

## 소요시간

40분 

## 어려웠던 점
결과값 -0을 조심하세요

## 배운 점 

## 궁금한 점

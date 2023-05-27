# [JS] BOJ 2869/달팽이는 올라가고 싶다

[문제 링크](https://www.acmicpc.net/problem/2869)

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

// @ts-check

function solution() {
  const [a, b, v] = input[0].split(" ").map(Number);
  console.log(parametricSearch(1, 1000000000, v, 0, a, b));
}

function parametricSearch(start, end, target, result, a, b) {
  if (start > end) {
    return result;
  }
  let mid = Math.floor((start + end) / 2);
  let val = calDay(mid, target, a, b);
  if (val === -1)
    // 기준을 높이자
    return parametricSearch(mid + 1, end, target, result, a, b);
  else if (val <= mid) {
    // 기준을 더 줄여보자, 이게 정답일 수도 있고
    result = mid;
    return parametricSearch(start, mid - 1, target, result, a, b);
  }
}

function calDay(day, target, a, b) {
  let move = (a - b) * day + b;
  // current: 현재날 만큼 올라갔어, 하지만 오늘 떨어질만큼은 안떨어졌지
  if (move >= target)
    // 목표치 이상을 달성했니? 그래도 하루 -1 해, 못미더워서
    return day - 1; // 하루 전날 ㄱㄱ
  move -= b;
  if (move >= target)
    // 뺏는데도 목표치 이상을 달성했다고?
    return day; // 당일날 ㄱㄱ
  return -1; // 한참 적은듯 더 기준을 높여봐야겠다.
}
```

## 소요시간

60분

## 어려웠던 점

parmetricSearch의 mid값을 어떤 기준으로 나누야할지 어려웠다. 중간 올라간 거리계산도 힘들었고, 다시 풀어보면 좋은 문제일 것 같음.

## 배운 점

## 궁금한 점

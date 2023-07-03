# [JS] BOJ 2805/나무 자르기

[문제 링크](https://www.acmicpc.net/problem/2805)

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
  const [n, m] = input[0].split(' ');
  const arr = input[1].split(' ').map(Number);
  console.log(parametricSearch(1, 2000000001, arr, 0, m));
}

function parametricSearch(start, end, arr, curr, target) {
  if (start > end) {
    return curr;
  }
  const mid = Math.floor((start + end) / 2);
  const total = arr.reduce((cal, cur) => (cal + ((cur - mid > 0) ? cur - mid : 0)), 0);
  if (total < target) { // 높이를 낮춰야 할 것 같아
    return parametricSearch(start, mid - 1, arr, curr, target);
  }
  else if (total === target) { // 어떻게 딱 맞췄네, 환경을 고려해 좀더 높이좀 높여볼까?
    curr = mid;
    return parametricSearch(mid + 1, end, arr, curr, target);
  }
  else { // 높이좀 높여서 더 total이 커지게
    curr = mid;
    return parametricSearch(mid + 1, end, arr, curr, target);
  }
}
```

## 소요시간
30분

## 어려웠던 점

## 배운 점

## 궁금한 점

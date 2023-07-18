# [JS] BOJ 11047/동전 0

[문제 링크](https://www.acmicpc.net/problem/11047)

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
  const [nk, ...arr] = input;
  const [n, k] = nk.split(' ').map(Number);
  const coinArr = arr.map(Number);
  let currK = k;
  let idx = parametricSearch(0, n, coinArr, k, -1);
  let ans = 0;
  while (currK > 0 && idx >= 0) {
    while (currK - coinArr[idx] >= 0) {
      currK -= coinArr[idx];
      ++ans;
    }
    --idx;
  }
  console.log(ans);
}

function parametricSearch(start, end, arr, target, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] <= target) {
    return parametricSearch(mid + 1, end, arr, target, mid);
  }
  else {
    return parametricSearch(start, mid - 1, arr, target, result);
  }
}
```
## 소요시간
15분

## 어려웠던 점

## 배운 점

## 궁금한 점

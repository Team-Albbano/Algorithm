# [JS] BOJ 2839/설탕 배달

[문제 링크](https://www.acmicpc.net/problem/2839)

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

let ans = Infinity;

function solution() {
  const n = +input[0];
  recurse(0, 0, n);
  if (ans === Infinity) {
    console.log("-1");
    return;
  }
  console.log(ans);
}

/**
 *
 * @param {number} depth 봉지의 개수
 * @param {number} cur 현재 쓰인 봉지의 개수
 * @param {number} target 배달해야할 설탕 무게
 * @returns void
 */
function recurse(depth, cur, target) {
  if (ans !== Infinity) return;
  if (cur > target) return;
  if (cur === target) {
    ans = Math.min(depth, ans);
    return;
  }
  recurse(depth + 1, cur + 5, target);
  recurse(depth + 1, cur + 3, target);
}

// function recurse(depth, cur, target) {
//   if (cur > target) return ;
//   if (cur === target) {
//     ans = Math.min(depth, ans);
//     return ;
//   }
//   recurse(depth + 1, cur + 3, target);
//   recurse(depth + 1, cur + 5, target);
// }
```

## 소요시간

15분

## 어려웠던 점

## 배운 점

시간초과가 나서 백트래킹에서 시간을 더 줄일 수 있는 조건문을 생각하면 시간을 현저히 줄일 수 있다.

## 궁금한 점

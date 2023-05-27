# [JS] BOJ 2292/벌집

[문제 링크](https://www.acmicpc.net/problem/2292)

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
  const n = +input[0];
  if (n === 1) {
    console.log(1);
    return;
  }
  let cnt = 1;
  let sum = 1;
  while (true) {
    if (n <= (sum += 6 * cnt)) {
      break;
    }
    ++cnt;
  }
  console.log(cnt + 1);
}

//  1 // 1
//  2  3  4  5  6  7 // 6 | (6 * 1 + 1) 1 |  6
//  8  9 10 11 12 13 14 15 16 17 18 19 // 12 | (6 * 3 + 1) 3 | 12
// 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 // 18 | (6 * 5 + 1) 5 | 18
// 38 ... 61 (6 * 10 + 1) 10 | 24
```

## 소요시간

45분

## 어려웠던 점

구현력 부족이 좀 있다..?

## 배운 점

빨리빨리 빈종이에 끄적여봐라..

## 궁금한 점

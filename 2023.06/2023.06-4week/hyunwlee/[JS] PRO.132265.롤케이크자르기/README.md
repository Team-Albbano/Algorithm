# [JS] PRO 132265/롤케이크 자르기

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/132265#qna)

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
  process.exit();
});

/**
 * 시간초과 (brute fore)
 */
// function solution(topping) {
//  const n = topping.length - 1;
//  let ans = 0;
//  for (let i = 0; i < n; ++i) {
//    const chulsu = new Set();
//    const bro = new Set();
//    for (let j = 0; j <= i; ++j) {
//      chulsu.add(topping[j]);
//    }
//    for (let j = i + 1; j < topping.length; ++j) {
//      bro.add(topping[j]);
//    }
//    if (chulsu.size === bro.size)
//      ++ans;
//  }
//  console.log(ans);
// };

function solution(topping) {
  const min = (parametricSearchDown(0, topping.length - 1, topping, -1));
  const max = (parametricSearchUp(0, topping.length - 1, topping, -1));
  if (min === -1 && max === -1) {
    return (0);
  }
  return (max - min + 1);
}

function parametricSearchUp(start, end, topping, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  const chulsu = new Set();
  const bro = new Set();
  for (let i = 0; i <= mid; ++i)
    chulsu.add(topping[i]);
  for (let i = mid + 1; i < topping.length; ++i)
    bro.add(topping[i]);
  if (chulsu.size <= bro.size) {
    if (chulsu.size === bro.size)
      result = mid;
    return parametricSearchUp(mid + 1, end, topping, result);
  }
  else {
    return parametricSearchUp(start, mid - 1, topping, result);
  }
}

function parametricSearchDown(start, end, topping, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  const chulsu = new Set();
  const bro = new Set();
  for (let i = 0; i <= mid; ++i)
    chulsu.add(topping[i]);
  for (let i = mid + 1; i < topping.length; ++i)
    bro.add(topping[i]);
  if (chulsu.size >= bro.size) {
    if (chulsu.size === bro.size)
      result = mid;
    return parametricSearchDown(start, mid - 1, topping, result);
  }
  else {
    return parametricSearchDown(mid + 1, end, topping, result);
  }
}
```

## 소요시간
60분

## 어려웠던 점

## 배운 점
시간초과가 나는지 생각을 먼저 해볼 것

## 궁금한 점

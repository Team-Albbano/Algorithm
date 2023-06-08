# [JS] BOJ 10773/제로

[문제 링크](https://www.acmicpc.net/problem/10773)

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

class Stack {
  constructor() {
    this._stack = [];
  }

  push(item) {
    this._stack.push(item);
  }

  pop() {
    return this._stack.pop();
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}

function solution() {
  const [n, ...arr] = input.map(Number);
  const stack = new Stack();
  arr.forEach((item) => {
    if (item === 0) stack.pop();
    else stack.push(item);
  });
  const result = stack._stack.reduce((cal, cur) => cal + cur, 0);
  console.log(result);
}
```

## 소요시간

5분

## 어려웠던 점

## 배운 점

## 궁금한 점

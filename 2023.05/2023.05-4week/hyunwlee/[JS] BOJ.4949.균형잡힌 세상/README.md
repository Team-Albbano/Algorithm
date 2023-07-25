# [JS] BOJ 4949/균형잡힌 세상

[문제 링크](https://www.acmicpc.net/problem/4949)

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
  peek() {
    return this._stack[this._stack.length - 1];
  }
}

function solution() {
  const arr = input.splice(0, input.length - 1);
  let ans = "";
  arr.forEach((line) => {
    const stack = new Stack();
    const charArr = line.split("");
    charArr.forEach((c) => {
      if (c === "(" || c === "[" || c === ")" || c === "]") stack.push(c);
      while (
        !stack.isEmpty() &&
        (stack.peek() === ")" || stack.peek() === "]")
      ) {
        const symb = stack.pop();
        if (stack.isEmpty()) {
          stack.push(symb);
          break;
        }
        if (symb === ")") {
          if (stack.peek() === "(") {
            stack.pop();
            continue;
          } else {
            stack.push(symb);
            break;
          }
        } else if (symb === "]") {
          if (stack.peek() === "[") {
            stack.pop();
            continue;
          } else {
            stack.push(symb);
            break;
          }
        }
      }
    });
    if (stack.isEmpty()) ans += "yes\n";
    else ans += "no\n";
  });
  console.log(ans);
}
```

## 소요시간

45분

## 어려웠던 점

구현력이 부족하여 꽤 오래걸렸다.

## 배운 점

## 궁금한 점

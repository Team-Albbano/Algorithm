# [JS] BOJ 1874/스택 수열

[문제 링크](https://www.acmicpc.net/problem/1874)

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
  const n = +input[0];
  const arr = input.filter((_, idx) => idx !== 0).map(Number);
  const stack = [];
  let idx = 0;
  let jdx = 0;
  let ans = "";
  while (++idx <= n) {
    stack.push(idx);
    ans += "+\n";
    if (idx === arr[jdx]) {
      while (stack.length > 0 && stack[stack.length - 1] === arr[jdx]) {
        stack.pop();
        ans += "-\n";
        ++jdx;
      }
    }
  }
  if (stack.length > 0) {
    console.log("NO");
    return;
  }
  console.log(ans);
}
```

## 소요시간

15분

## 어려웠던 점

## 배운 점

## 궁금한 점

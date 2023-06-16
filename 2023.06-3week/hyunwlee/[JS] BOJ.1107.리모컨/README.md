# [JS] BOJ 1107/리모컨

[문제 링크](https://www.acmicpc.net/problem/1107)

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

let min = 0;
function solution() {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const arr = (m === 0) ? [] : input[2].split(' ').map(Number);
  const valuableArr = '0123456789'.split('')
                                  .map(Number)
                                  .filter(item => (arr.indexOf(item) === -1));
  min = Math.abs(n - 100);
  recurse(0, valuableArr, n, '');
  console.log(min)
}

function recurse(depth, valuableArr, n, str) {
  if (depth === 6)
    return ;
  valuableArr.forEach(item => {
    let newS = str + item;
    let sum = Number(newS);
    min = Math.min(min, (Math.abs(sum - n) + (depth + 1)));
    recurse(depth + 1, valuableArr, n, newS);
  });
}
```

## 소요시간

60분

## 어려웠던 점

평소처럼 원했던 depth크기의 탈출 조건에서 탈출직전 연산을 하려하면 해결되지 않는 부분이 있는 문제이다.  
탈출조건에서가 아닌 모든 재귀가 일어나는 부분에서 str을 수정해보도록 하자.

## 배운 점

## 궁금한 점

# [JS] BOJ 1074/Z

[문제 링크](https://www.acmicpc.net/problem/1074)

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
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution();
  process.exit();
});

let num = 0;

function solution() {
  const [n, r, c] = input[0].split(' ').map(Number);
  recurse(0, Math.pow(2, n) - 1, 0, Math.pow(2, n) - 1, r, c);
  console.log(num);
}

function recurse(xS, xE, yS, yE, x, y) {
  if (xS >= xE && yS >= yE) {
    return ;
  }
  const xM = Math.floor((xS + xE) / 2);
  const yM = Math.floor((yS + yE) / 2);
  if (x <= xM && y <= yM) {
    recurse(xS, xM, yS, yM, x, y);
  }
  if (x <= xM && y > yM) {
    num += Math.pow((xE - xM), 2);
    recurse(xS, xM, yM + 1, yE, x, y);
  }
  if (x > xM && y <= yM) {
    num += Math.pow((xE - xM), 2) * 2;
    recurse(xM + 1, xE, yS, yM, x, y);
  }
  if (x > xM && y > yM) {
    num += Math.pow((xE - xM), 2) * 3;
    recurse(xM + 1, xE, yM + 1, yE, x, y);
  }
}
```

## 소요시간
2시간 + 풀이봄
## 어려웠던 점
메모리초과, 시간초과 모두 경험했고, 부분적으로만 계산할 수 있었던 문제임을 알 수 있었다. 꼭 나중에 다시 또 풀어볼만한 어려운 문제
## 배운 점

## 궁금한 점

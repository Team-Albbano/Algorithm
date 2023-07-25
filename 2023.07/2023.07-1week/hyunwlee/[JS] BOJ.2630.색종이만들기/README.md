# [JS] BOJ 2630/색종이 만들기

[문제 링크](https://www.acmicpc.net/problem/2630)

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

let blue = 0;
let white = 0;
function solution() {
  let [n, ...arr] = input;
  const ans = [0, 0];
  n = Number(n);
  const map = arr.map(line => {
    return line.split(' ').map(Number);
  });
  if (!isFull(0, n - 1, 0, n - 1, map))
    recurse(0, n - 1, 0, n - 1, map);
  console.log(white);
  console.log(blue);
}

function recurse(xs, xe, ys, ye, map) {
  if (xs > xe)
    return ;
  const xm = xs + Math.floor((xe - xs) / 2);
  const ym = ys + Math.floor((ye - ys) / 2);
  if (!isFull(xs, xm, ys, ym, map))
    recurse(xs, xm, ys, ym, map);
  if (!isFull(xs, xm, ym + 1, ye, map))
    recurse(xs, xm, ym + 1, ye, map);
  if (!isFull(xm + 1, xe, ys, ym, map))
    recurse(xm + 1, xe, ys, ym, map);
  if (!isFull(xm + 1, xe, ym + 1, ye, map))
    recurse(xm + 1, xe, ym + 1, ye, map);
}

function isFull(xs, xe, ys, ye, map) {
  let cntBlue = 0;
  let cntWhite = 0;
  for (let i = xs; i <= xe; ++i) {
    for (let j = ys; j <= ye; ++j) {
      if (map[i][j] === 1) 
        ++cntBlue;
      else
        ++cntWhite;
    }
  }
  if (cntBlue === Math.pow((xe - xs + 1), 2)) {
    ++blue;
    return true;
  }
  if (cntWhite === Math.pow((xe - xs + 1), 2)) {
    ++white;
    return true;
  }
  return false;
}
```

## 소요시간
120분

## 어려웠던 점

## 배운 점

## 궁금한 점

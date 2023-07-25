# [JS] BOJ 1620/나는야 포켓몬 마스터 이다솜

[문제 링크](https://www.acmicpc.net/problem/1620)

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
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  const map = new Map();
  for (let i = 1; i <= n; ++i) {
    map.set(String(i), arr[i - 1]);
    map.set(arr[i - 1], String(i));
  };
  let ans = '';
  for (let i = n; i < n + m; ++i) {
    ans += map.get(arr[i]) + '\n';
  }
  console.log(ans);
}
```

## 소요시간
30분

## 어려웠던 점

## 배운 점

## 궁금한 점

# [JS] BOJ 5525/IOIOI

[문제 링크](https://www.acmicpc.net/problem/5525)

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
  const n = Number(input[0]);
  const m = Number(input[1]);
  const s = input[2];
  let pattern = 'I';
  for (let i = 0; i < n; ++i)
    pattern += 'OI';
  console.log(KMP(s, pattern));
}

function makeLPSTable(pattern) {
  const table = Array.from({length: pattern.length}, _ => 0);
  let j = 0;
  for (let i = 1; i < pattern.length; ++i) {
    while (j > 0 && pattern[i] !== pattern[j])
      j = table[j - 1];
    if (pattern[i] === pattern[j])
      table[i] = ++j;
  }
  return table;
}

function KMP(s, pattern) {
  const table = makeLPSTable(pattern);
  let j = 0;
  let ans = 0;
  for (let i = 0; i < s.length; ++i) {
    while (j > 0 && s[i] !== pattern[j])
      j = table[j - 1];
    if (s[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        ++ans;
        j = table[j];
      }
      else
        ++j;
    }
  }
  return (ans);
}
```

## 소요시간

## 어려웠던 점
생소한 KMP알고리즘

## 배운 점

## 궁금한 점

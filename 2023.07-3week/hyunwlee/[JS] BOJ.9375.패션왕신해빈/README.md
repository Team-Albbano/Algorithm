# [JS] BOJ 9375/패션왕 신해빈

[문제 링크](https://www.acmicpc.net/problem/9375)

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
  const [t, ...arr] = input;
  let i = -1;
  let j = 0;
  let ans = '';
  while (++i < arr.length) {
    const map = new Map();
    const num = Number(arr[i]);
    j = i + 1;
    for (; j <= i + num; ++j) {
      const [clothing, type] = arr[j].split(' ');
      if (map.has(type)) {
        const value = map.get(type);
        map.set(type, value + 1);
      }
      else {
        map.set(type, 1);
      }
    }
    i += num;
    let sum = 1;
    for (const [key, value] of map.entries()) {
      sum *= (value + 1);
    }
    ans += (sum - 1) + '\n';
  }
  console.log(ans);
}
```
## 소요시간
15분

## 어려웠던 점

## 배운 점

## 궁금한 점

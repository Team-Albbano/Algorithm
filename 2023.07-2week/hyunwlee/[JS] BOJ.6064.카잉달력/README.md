# [JS] BOJ 6064/카잉 달력

[문제 링크](https://www.acmicpc.net/problem/6064)

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
  let [_, ...arr] = input;
  let s = '';
  arr = arr.map(line => line.split(' ').map(Number));
  arr.forEach(([m, n, x, y]) => {
    const destroy = lcm(m, n);
    while (true) {
      if (x > destroy || y > destroy) {
        s += (-1 + '\n');
        break;
      }
      else if (x > y)
        y += n;
      else if (x < y)
        x += m;
      else {
        s += (x + '\n');
        break;
      }
    }
  });
  console.log(s);
}

function gcd(a, b) {
  if (b === 0)
    return a;
  if (a < b)
    return gcd(a, b % a);
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

## 소요시간

5시간

## 어려웠던 점
생소한 중국인의 나머지 정리, 다른사람의 풀이를 보았다.

## 배운 점

## 궁금한 점

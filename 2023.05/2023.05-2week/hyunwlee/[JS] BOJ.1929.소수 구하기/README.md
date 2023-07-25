# [JS] BOJ 1929/소수 구하기

[문제 링크](https://www.acmicpc.net/problem/1929)

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
  const [m, n] = input[0].split(' ').map(Number);
  const prime = Array.from({length: n}, _ => 0);
  let pn = 0;
  const check = Array.from({length: n + 1}, _ => false);

  for (let i = 2; i <= n; ++i) {
    if (check[i]) continue;
    prime[pn++] = i;
    for (let j = i * i; j <= n; j += i) {
      check[j] = true;
    }
  }
  const ans = prime.filter(item => (m <= item && item <= n)).join('\n');
  console.log(ans);
}
```

## 소요시간

25분, 에라토스테네스의 체 찾아봄

## 어려웠던 점

에라토스테네스의 체 방식을 잊어 구글링할 수 밖에 없었다. 다시 이해하고 넘어간다.  

## 배운 에

## 궁금한 점

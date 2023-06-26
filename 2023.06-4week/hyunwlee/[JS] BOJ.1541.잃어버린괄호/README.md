# [JS] BOJ 1541/잃어버린 괄호

[문제 링크](https://www.acmicpc.net/problem/1541)

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
  const s = input[0];
  const nums = [];
  let i = 0;
  while (i < s.length)
  {
    let j = i;
    let num = '';
    while (j < s.length && s[j] !== '-')
      num += s[j++];
    nums.push(num);
    if (j >= s.length)
      break;
    i = j + 1;
  }
  let ans = 0;
  ans = nums[0].split('+').map(Number).reduce((cal, cur) => (cal + cur), 0);
  for (let i = 1; i < nums.length; ++i) {
    const sum = nums[i].split('+').map(Number).reduce((cal, cur) => (cal + cur), 0);
    ans -= sum;
  }
  console.log(ans);
}
```

## 소요시간
구글링

## 어려웠던 점

## 배운 점
식의 값을 최소로 만들기 위해서는 뺄셈 연산자 뒤의 수를 최대한 크게 만들면 된다.

## 궁금한 점

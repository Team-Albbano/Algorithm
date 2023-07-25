# [JS] BOJ 11659/구간 합 구하기 4

[문제 링크](https://www.acmicpc.net/problem/11659)

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
  let [_, arr, ...q] = input;
  let sum = 0;
  arr = arr.split(' ').map(item => {
    return sum += Number(item);
  });
  let ans = '';
  q.forEach(item => {
    const [i, j] = item.split(' ').map(Number);
    if (i === 1)
      ans += arr[j - 1] + '\n';
    else
      ans += arr[j - 1] - arr[i - 2] + '\n';
  });
  console.log(ans);
}
```
## 소요시간
15분

## 어려웠던 점

## 배운 점

## 궁금한 점

# [JS] BOJ 15829/Hashing

[문제 링크](https://www.acmicpc.net/problem/15829)

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
  const charArr = input[1].split("");
  let sum = 0;
  let r = 1;
  charArr.forEach((c) => {
    const ch = c.charCodeAt(0) - "a".charCodeAt(0) + 1;
    const ans = (ch * r) % 1234567891;
    sum += ans % 1234567891;
    r *= 31;
    r %= 1234567891;
  });
  console.log(sum % 1234567891);
}
```

## 소요시간

40 + a (다른사람 풀이 봄)

## 어려웠던 점

결과적으로 MOD 후 출력하는 문제의경우
연산과정에서 모두 MOD를 적용시켜야 한다.

과정중에 값이 정해진 정수타입보다 커진경우 곱할때 음수로 바뀌므로. 곱하는 단계단계마다 모두 MOD 1234567891를 적용시켜서 값이 1234567891 보다 커지지 않게 해야한다.

## 배운 점

## 궁금한 점

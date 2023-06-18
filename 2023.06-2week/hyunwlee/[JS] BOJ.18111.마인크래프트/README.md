# [JS] BOJ 18111/마인크래프트

[문제 링크](https://www.acmicpc.net/problem/18111)

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
  const [n, m, blocks] = input.shift().split(' ').map(Number);
  const arr = input.map(item => item.split(' ').map(val => Number(val)));
  console.log(arr);
  const ans = [];
  for (let i = 0; i <= 256; ++i)
    ans.push(bruteForce(i, arr, n, m, blocks));
  ans.sort((a, b) => {
    if (a[0] === b[0])
        return (b[1] - a[1]);
    else
        return (a[0] - b[0]);
  });
  console.log(ans[0].join(' '));
}

function bruteForce(target, arr, n, m, blocks) {
  let blockNum = blocks;
  let remove = 0;
  let add = 0;
  let time = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (arr[i][j] > target) {
        remove += arr[i][j] - target;
        blockNum += arr[i][j] - target;
      }
      else if (arr[i][j] < target) {
        add += target - arr[i][j];
        blockNum -= target - arr[i][j];
      }
      time = 2 * remove + add;
    }
  }
  if (blockNum < 0)
    return [Number.MAX_SAFE_INTEGER, target];
  else 
    return [time, target];
}
```

## 소요시간

60분

## 어려웠던 점


## 배운 점

## 궁금한 점

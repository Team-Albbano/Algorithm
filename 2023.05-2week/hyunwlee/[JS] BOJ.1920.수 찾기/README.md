# [JS] BOJ 1920/수 찾기

[문제 링크](https://www.acmicpc.net/problem/1920)

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
  const n = +input[0];
  const targetArr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = +input[2];
  const arr = input[3].split(" ").map(Number);
  let ans = "";
  arr.forEach((item) => {
    if (binarySearch(0, targetArr.length - 1, item, targetArr) === -1)
      ans += "0\n";
    else ans += "1\n";
  });
  console.log(ans);
}

function binarySearch(start, end, target, targetArr) {
  if (start > end) return -1;
  else if (start === end) {
    if (targetArr[start] === target) return start;
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (targetArr[mid] === target) return mid;
  else if (targetArr[mid] < target)
    return binarySearch(mid + 1, end, target, targetArr);
  else if (targetArr[mid] > target)
    return binarySearch(start, mid - 1, target, targetArr);
}
```

## 소요시간

25분

## 어려웠던 점

이분탐색 재귀 탈출조건에 (start > end)일 경우 뿐만아니라 (start === end)도 신경 써줘야 한다.  
start와 end가 같으면서 원하는 값이 안나올 때 탈출 시켜줘야 하므로...  
이것때문에 여러번 틀렸다.

## 배운 에

## 궁금한 점

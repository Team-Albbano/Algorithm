# [JS] BOJ 2110/공유기 설치

[문제 링크](https://www.acmicpc.net/problem/2110)

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
  const [info, ...arr] = input;
  const houseArr = arr.map(Number).sort((a, b) => (a - b));
  const [n, c] = info.split(' ').map(Number);
  console.log(parametricSearch(0, 1000000000, houseArr, c, -1));
}

function parametricSearch(start, end, houseArr, target, result) {
  if (start > end) {
    return result;
  }
  const mid = Math.floor((start + end) / 2);
  const numPickedHouses = countPickedHouses(mid, houseArr);
  if (numPickedHouses < target) {
    return parametricSearch(start, mid - 1, houseArr, target, result);
  }
  else {
    result = mid;
    return parametricSearch(mid + 1, end, houseArr, target, result);
  }
}

function countPickedHouses(targetAble, houseArr) {
  let cnt = 1; // default
  let pickedHouse = houseArr[0];
  for (let i = 1; i < houseArr.length; ++i) {
    if (houseArr[i] - pickedHouse >= targetAble) {
      pickedHouse = houseArr[i];
      ++cnt;
    }
  }
  return cnt;
}
```

## 소요시간
60분
## 어려웠던 점
mid값을 구하고 적절한지 판별하는 function을 짜는 게 어려웠음
## 배운 점

## 궁금한 점

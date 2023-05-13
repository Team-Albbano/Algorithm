<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 3085/사탕 게임

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/3085)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

// 1. 행으로 인접한 두 칸을 고르고 교환한다 (Swap)
// 2. 행과 열에서 가장 길게 연속해있는 사탕의 개수를 찾는다.
// 3. 열로 인접한 두 칸을 고르고 교환한다 (Swap)
// 4. 행과 열에서 가장 길게 연속해있는 사탕의 개수를 찾는다

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let candy = input.slice(1).map((el) => el.split(''));
let max = 1;
function candySwap(i, j) {
  const dir = [
    [0, 1],
    [1, 0],
  ];
  dir.forEach((el) => {
    const [x, y] = el;
    if (i + x > -1 && j + y > -1 && i + x < N && j + y < N && candy[i + x][j + y] != candy[i][j]) {
      let temp = candy[i][j];
      candy[i][j] = candy[i + x][j + y];
      candy[i + x][j + y] = temp;
      checkRow();
      checkCol();
      candy[i + x][j + y] = candy[i][j];
      candy[i][j] = temp;
    }
  });
}
function checkRow() {
  for (let i = 0; i < N; i++) {
    let checkArr = [1];
    for (let j = 1; j < N; j++) {
      checkArr[j] = candy[i][j - 1] === candy[i][j] ? checkArr[j - 1] + 1 : 1;
    }
    max = Math.max(...checkArr, max);
  }
}
function checkCol() {
  for (let i = 0; i < N; i++) {
    let checkArr = [1];
    for (let j = 1; j < N; j++) {
      checkArr[j] = candy[j - 1][i] === candy[j][i] ? checkArr[j - 1] + 1 : 1;
    }
    max = Math.max(...checkArr, max);
  }
}
for (let i = 0; i < N; i++) {
  if (max === N) break;
  for (let j = 0; j < N; j++) {
    if (max === N) break;
    candySwap(i, j);
  }
}
console.log(max);
```

## 소요시간

2시간

## 어려웠던 점

와 진짜 어렵다,,, 계속 비슷한 유형을 풀어봐야 할 듯 싶다,, 😹

## 배운 점

## 궁금한 점

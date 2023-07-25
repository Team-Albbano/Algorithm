<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1018/체스판 다시 칠하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1018)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

우선 N,M을 첫째 줄에서 뽑고, 비교군으로 왼쪽 위 칸이 흰색인 경우를 whiteBoard에, 검은색인 경우를 blackBoard에 만들어주었다.

checkBoard 함수를 만들어 흰색판일 경우, 검은색판일 경우를 나눠 수정해야 하는 정사각형 개수를 셀 수 있도록 만들었다. 함수 내에서 입력된 판과 정상적인 판(흰색, 검은색)을 비교하여 틀린부분이 있을때마다 카운트를 증가시켜 수정해야 하는 개수를 측정했다.

흰색판일 경우와 검은색판일 경우 중 값이 더 작은 경우를 출력했으며, 이러한 경우의 수들을 배열에 담아 최솟값을 출력할 수 있도록 만들었다.

```javascript
const [n, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = n.split(' ').map(Number);
const whiteBoard = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const blackBoard = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

let modify = [];

function checkBoard(x, y) {
  let whiteCheck = 0;
  let blackCheck = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      board[i][j] !== whiteBoard[i - y][j - x] && whiteCheck++;
      board[i][j] !== blackBoard[i - y][j - x] && blackCheck++;
    }
  }

  return whiteCheck < blackCheck ? whiteCheck : blackCheck;
}

for (let i = 0; i + 7 < M; i++) {
  for (let j = 0; j + 7 < N; j++) {
    modify.push(checkBoard(i, j));
  }
}

console.log(Math.min(...modify));
```

## 소요시간

1시간

## 어려웠던 점

2차원 배열을 어떻게 비교할지에 대해 고민을 많이 해본 시간이었다.

## 배운 점

## 궁금한 점

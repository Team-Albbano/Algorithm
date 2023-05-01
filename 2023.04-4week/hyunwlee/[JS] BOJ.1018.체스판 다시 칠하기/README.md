# [JS] BOJ 1018/체스판 다시 칠하기

[문제 링크](https://www.acmicpc.net/problem/1018)

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

준비물 - wanna be 8 x 8 체스판을 만들어 놓는다.   
1. N x M 중에서 8 x 8이 될수 있는 공간을 차례대로 모두 구한다.  
2. 구한 구간 8 x 8과 wanna be 8 x 8과의 차를 배열에 저장시킨다.  
3. 제일 작은 차를 구해 답으로 반환한다.  

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
  const [N, M] = input[0].split(" ").map((item) => +item);
  const board = Array(N).fill(Array(M).fill(null));
  for (let i = 1; i < input.length; ++i) board[i - 1] = input[i].split("");
  const sum = [];
  let arr = Array(N).fill(Array(M).fill(1));
  arr = arr.map((item, i) =>
    item.map((val, j) => {
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0))
        return "B";
      return "W";
    })
  );
  for (let startingX = 0; startingX <= N - 8; ++startingX) {
    for (let startingY = 0; startingY <= M - 8; ++startingY) {
      let cases = [0, 0];
      for (let i = startingX; i < startingX + 8; ++i) {
        for (let j = startingY; j < startingY + 8; ++j) {
          if (board[i][j] === arr[i][j]) ++cases[0];
          else ++cases[1];
        }
      }
      sum.push(cases[0]);
      sum.push(cases[1]);
    }
  }
  console.log(sum.reduce((sum, item) => Math.min(sum, item), 64));
}

```

## 소요시간

1시간

## 어려웠던 점

N x M 체스판의 모든 경우의 수 인줄 알았지만, 눈을 비비고 다시보고 나니 N x M중에서 8 x 8만의 경우의 수를 따지는 문제였다.

## 배운 점

문제를 제대로 읽어보고 풀자.

## 궁금한 점

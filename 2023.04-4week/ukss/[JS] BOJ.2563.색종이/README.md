# [JS] BOJ 2563/색종이

[문제 링크](https://www.acmicpc.net/problem/2563)

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

우선 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지를 구현하기 위해 2차원 배열로 행과 열이 각각 100인 false로 채운 배열을 만들었다.

첫째 줄에 색종이의 수가 주어지기에 우선 shift()를 사용해 cnt 변수에 담아냈고, 이어 둘째 줄부터 한 줄에 하나씩 색종이를 붙인 위치가 나오기에 cnt 변수만큼 반복문을 돌려 붙인 위치들을 뽑아냈다.

그리고 붙인 색종이의 가로, 세로의 크기가 각각 10이므로 붙인 위치에서 10만큼 더한 만큼 반복문을 작동시켰고, 실행할 때마다 해당 좌표를 true로 값을 변환시켜주었다.

이후 해당 배열의 길이만큼 다시 해당 배열에 반복문을 작동시켜 true로 변환된 좌표의 값들만 따로 뽑아내었고, 뽑아낸 배열의 길이를 전부 더해 색종이가 붙은 영역의 넓이값을 구하였다.

```javascript
const list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = list.shift();
let area = 0;
let arr = Array.from(Array(100), () => Array(100).fill(false));

for (let i = 0; i < cnt; i++) {
  let [x, y] = list[i].split(' ').map(Number);

  for (let j = x - 1; j < x + 9; j++) {
    for (let k = y - 1; k < y + 9; k++) {
      arr[j][k] = true;
    }
  }
}

let testCnt = 0;

for (let i = 0; i < arr.length; i++) {
  let test = arr[i].filter((el) => el === true);
  testCnt += test.length;
}

console.log(testCnt);
```

## 소요시간

1시간

## 어려웠던 점

2차원 배열을 구현하고 이를 어떻게 넓이를 구할지 생각하는 데 시간을 많이 소요했던 문제였다.

## 배운 점

다차원 배열을 어떻게 구현하며, 이를 어떻게 활용할 지 공부할 수 있었던 시간이었다.

## 궁금한 점

많은 리뷰 부탁드립니다 🔫

# [JS] BOJ 1654/랜선 자르기

[문제 링크](https://www.acmicpc.net/problem/1654)

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

binary search: 어떤 배열을 정렬시킨 후, 원하는 값을 log(N)시간에 찾는 방법  
parametric search: 1 ~ N까지 중 원하는 값을 log(N)시간에 찾는 방법  
크게 자르면 적게 조각나고,  
잘게 자르면 많게 조각나고를 이용한다.

1. 너 왜 크게잘라? 좀 잘게 썰어봐...
   => 오키, 절반 크기로 줄여서 잘라볼게
2. 오!, N토막 좋은데 재료손실없게 알뜰이 더 가능? || 야야야 너무 잘게 썰었어... 좀더 크게 썰수 있나?  
   => 오키, 일단 지금 크기 cache해놓고, 좀더 늘려서 잘라보자! (이유는, 최대길이를 묻는 문제여서..)

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
  solution(input);
  process.exit();
});

function solution(input) {
  const [k, target] = input[0].split(" ").map(Number);
  const arr = input.filter((item, idx) => idx !== 0);
  console.log(parametricSearch(1, 2147483647, arr, target, -1));
}

function parametricSearch(left, right, arr, target, result) {
  if (left > right) return result;
  let mid = Math.floor((left + right) / 2);
  const val = arr.reduce((sum, cur) => sum + Math.floor(cur / mid), 0);
  // 1. 야 왤케 성큼성큼잘라? 너무 커;;
  // okay. 절반 크기로 줄여서 잘라볼게?
  if (val < target) return parametricSearch(left, mid - 1, arr, target, result);
  else {
    // 2. 오 N만큼 N만큼 좋았어 || 야야 왤케 난도질해 좀더 시원하게 큼직큼직하게 썰어봐; => okay 1.5배 늘려볼게?
    result = mid;
    return parametricSearch(mid + 1, right, arr, target, result);
  }
}
```

## 소요시간

1시간 + 기억을 못해서 들쳐봄

## 어려웠던 점

시간 상 brute force로는 시간초과가 날 것 같아 이분탐색 생각은 들었으나, 이분탐색 구현력 부족으로 풀지 못하였다.

## 배운 점

## 궁금한 점

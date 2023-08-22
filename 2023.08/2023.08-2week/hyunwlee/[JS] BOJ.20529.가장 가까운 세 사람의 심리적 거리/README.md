# [JS] BOJ 20529/가장 가까운 세 사람의 심리적 거리

[문제 링크](https://www.acmicpc.net/problem/20529)

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

let min = Number.MAX_SAFE_INTEGER;
function solution() {
  const [t, ...arr] = input;
  let ans = '';
  for (let i = 0; i < t; ++i) {
    const mbtis = Array.from(arr[i * 2 + 1].split(' '));
    // 비둘기집 원리 (불필요한 계산을 줄인다)
    if (mbtis.length > 32) {
      ans += 0 + '\n';
      continue;
    }
    min = Number.MAX_SAFE_INTEGER;
    recurse(0, '', Array.from({length: mbtis.length}, () => false), mbtis);
    ans += min + '\n';
  }
  console.log(ans);
}

function countDistanceMbtis(a, b) {
  let distance = 0;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i])
      ++distance;
  }
  return distance;
}

function recurse(depth, str, check, mbtis) {
  if (depth >= 3) {
    const idxs = str.split(',').map(Number);
    const first = countDistanceMbtis(mbtis[idxs[0]], mbtis[idxs[1]]);
    const second = countDistanceMbtis(mbtis[idxs[0]], mbtis[idxs[2]]);
    const third = countDistanceMbtis(mbtis[idxs[1]], mbtis[idxs[2]]);
    min = Math.min(min, (first + second + third));
    return;  
  }
  for (let i = 0; i < mbtis.length; ++i) {
    if (check[i])
      continue;
    check[i] = true;
    recurse(depth + 1, str === '' ? i : str + ',' + i ,check, mbtis)
    check[i] = false;
  }
}
```

## 소요시간
다른사람 풀이 봄

## 어려웠던 점

## 배운 점
비둘기집 원리로 불필요한 계산을 커팅한다.

## 궁금한 점

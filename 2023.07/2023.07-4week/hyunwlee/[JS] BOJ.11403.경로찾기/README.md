# [JS] BOJ 11403/경로 찾기

[문제 링크](https://www.acmicpc.net/problem/11403)

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
  let [n, ...lines] = input;
  n = Number(n);
  lines = lines.map(line => line.split(' ').map(Number));
  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (lines[i][k] === 1 && lines[k][j] === 1) {
          lines[i][j] = 1;
        }
      }
    }
  }
  let s = '';
  lines.forEach(line => {
    s += line.join(' ') + '\n';
  })
  console.log(s);
}



```
## 소요시간
이전 풀이 봄

## 어려웠던 점

## 배운 점
플로이드 와샬    
i에서 j로 갈 수 있는지만 확인하는 것이 아니라  
i에서 k를 통해 j로 갈 수 있는 것도 확인하는 방법  
```
if (arr[i][k] === 1 && arr[k][j] === 1)
  arr[i][j] = 1;
```

플로이드 와샬은 어떤 특정 하나의 노드에서 다른 노드로 경로를 구하는 다익스트라와는 달리 모든 노드에서 다른 노드 경로를 구할 수 있

## 궁금한 점

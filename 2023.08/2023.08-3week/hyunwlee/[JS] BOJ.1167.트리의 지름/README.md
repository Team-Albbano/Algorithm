# [JS] BOJ 1167/트리의 지름

[문제 링크](https://www.acmicpc.net/problem/1167)

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
  const [n, ...lines] = input;
  const lists = Array.from(Array(Number(n) + 1), _ => []);
  lines.forEach(line => {
    const [from, ...arr] = line.split(' ').map(Number);
    let i = 0;
    while (i < arr.length - 1) {
      const to = arr[i++];
      const weight = arr[i++];
      lists[from].push({to, weight});
    }
  })
  let max = {to: 0, weight: Number.MIN_SAFE_INTEGER};
  let check = Array.from({length: Number(n) + 1}, _ => false);
  dfs(1, 0, lists, check, max);
  check = Array.from({length: Number(n) + 1}, _ => false);
  dfs(max.to, 0, lists, check, max);
  console.log(max.weight);
}

function dfs(x, val, lists, check, max) {
  if (check[x])
    return ;
  check[x] = true;
  if (val > max.weight) {
    max.to = x;
    max.weight = val;
  }
  for (let {to, weight} of lists[x])
    dfs(to, val + weight, lists, check, max);
}
```

## 소요시간
풀이 봄

## 어려웠던 점

## 배운 점
1. 트리의 지름이란, 트리 상에서 가장 먼 거리를 가지는 두 정점 사이의 경로  

- 트리에서 임의의 정점 x를 잡는다.
- 정점 x에서 가장 먼 정점 y를 찾는다.
- 정점 y에서 가장 먼 정점 z를 찾는다.
- 트리의 지름은 정점 y와 정점 z를 연결하는 경로다.
  
2. 함수 매개변수는 모두 값으로 전달이 된다.

## 궁금한 점

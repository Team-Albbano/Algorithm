# [JS] PRO 43164/여행경로

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43164)

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

let ans = [];
function solution(tickets) {
  const check = Array.from({length: tickets.length}, _ => false);
  dfs(0, tickets, 'ICN', 'ICN', check);
  ans = ans.sort((a, b) => {
    if (a < b)
      return -1;
    else if (a > b)
      return 1;
    return 0;
  });
  return ans[0].split(' ');
}

function dfs(depth, tickets, curr, route, check) {
  if (depth === tickets.length) {
    ans.push(route);
    return ;
  }
  tickets.forEach((ticket, index) => {
    const [from, to] = ticket;
    if (from === curr) {
      if (!check[index]) {
        check[index] = true;
        dfs(depth + 1, tickets, to, route + ' ' + to, check);
        check[index] = false;
      }
    }
  });
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
```

## 소요시간
15분

## 어려웠던 점

## 배운 점

## 궁금한 점

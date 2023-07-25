# [JS] PRO 43163/단어 변환

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43163)

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


let ans = Number.MAX_VALUE;
function solution(begin, target, words) {
  const check = Array.from({length: words.length}, _ => false);
  if (words.indexOf(target) === -1 || begin === target) {
    return 0;
  }
  dfs(0, begin, target, words, check);
  if (ans === Number.MAX_VALUE)
    return 0;
  return ans;
}

function dfs(depth, curr, target, words, check) {
  if (depth >= words.length) {
    return ;
  }
  if (curr === target) {
    ans = Math.min(ans, depth);
    return depth;
  }
  words.forEach((word, index) => {
    if (!check[index]) {
      if (diffWords(curr, word)) {
        check[index] = true;
        dfs(depth + 1, word, target, words, check);
        check[index] = false;
      }
    }
  });
}

function diffWords(a, b) {
  let cnt = 0;
  let i = -1;
  while (++i < a.length) {
    if (a[i] === b[i])
      ++cnt;
  }
  return (cnt === a.length - 1);
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "hit", ["hot", "dot", "dog", "lot", "log"]));
```

## 소요시간
30분

## 어려웠던 점

## 배운 점

## 궁금한 점

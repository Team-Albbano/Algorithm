# [JS] PRO 17686/파일명 정렬

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/17686)

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
  // solution();
  process.exit();
});

function solution(files) {
  files = files.map(item => {
    let head = '';
    let number = '';
    let tail = '';
    let i = -1;
    while (++i < item.length) {
      if ('0' <= item[i] && item[i] <= '9')
        break;
      head += item[i];
    }
    --i;
    while (++i < item.length) {
      if ('0' > item[i] || item[i] > '9')
        break;
      number += item[i];
    }
    --i;
    while (++i < item.length) {
      if (item[i] === '.')
        continue;
      tail += item[i];
    }
    return {head: head.toLowerCase(), number: Number(number), tail, pure: item};
  });
  const sortedFiles = files.sort((a, b) => {
    if (a.head === b.head) {
      if (a.number === b.number) {
        return 0;
      }
      else {
        return (a.number - b.number);
      }
    }
    else
      return a.head < b.head ? -1 : a.head > b.head ? 1 : 0;
  });
  const answer = sortedFiles.map(item => item.pure);
  return answer;
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
```

## 소요시간
40분

## 어려웠던 점

## 배운 점

## 궁금한 점

# [JS] PRO 43165/타겟 넘버

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43165)

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
let ans = 0;
function solution(numbers, target) {
  recurse(0, 0, target, numbers);
  return ans;
}

function recurse(depth, cur, target, numbers) {
  if (depth === numbers.length) {
    if (cur === target)
      ++ans;
    return ;
  }
  recurse(depth + 1, cur - numbers[depth], target, numbers);
  recurse(depth + 1, cur + numbers[depth], target, numbers);
}
```

## 소요시간
20분
## 어려웠던 점

## 배운 점

## 궁금한 점

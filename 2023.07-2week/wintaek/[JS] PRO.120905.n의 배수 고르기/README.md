<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120905/n의 배수 고르기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120905)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

(1) 문제풀이 조건 중 배열을 return 을 해야하니 let answer = [] 를 해줍니다.

(2) numlist 중 n의 배수들을 남긴 값일 return을 해주어야 합니다. n % numlist === 0 이라면 n의 배수의 값이므로 미리 조건문에 사용해줍니다.

(3) for문을 돌려 numlist.length 만큼 하나씩 배열들을 꺼내줍니다.

(4) 꺼낸 배열들을 const item = numlist[i] 를 통해서 하나씩 꺼내어 조건문을 넣어 비교해줍니다.

(5) 문제풀이 (2) 에서 사용한 구조를 조건문에 넣어줍니다.

(6) 배열들을 차례대로 넣어야 하기 때문에 push 를 이용하여 answer에 값을 집어넣어줍니다.

```js
function solution(n, numlist) {
  let answer = [];
  for (let i = 0; i < numlist.length; i++) {
    const item = numlist[i];
    if (item % n === 0) {
      answer.push(item);
    }
  }
  return answer;
}

// ex) : 10% 3 ! == 0 -> 10은 3의 배수가 아니다
```

## 소요시간

**혼자생각한 시간** : 20분
**풀이 및 이해시간** : 45분

## 어려웠던 점

1. numlist 에서 n의 배수를 꺼내라는 것이 매우 어려웠습니다.

## 배운 점

1. 똑같이 for문으로 천천히 반복해서 풀고 있는데, 문제 설명 계속해서 읽어보면서 어떤 풀이를 이용해서 풀면 좋을까 라는 생각을 조금 더 깊게 고민해야 할 것 같습니다.

## 궁금한 점

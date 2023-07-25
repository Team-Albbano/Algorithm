<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120906/자릿수 더하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

(1) 숫자열을 문자열로 바꿔주기 위해 toString()을 사용하였습니다

(2) for문을 돌려 num 안에 있는 숫자들을 각각 꺼내준 다음 차례대로 더해주었습니다.

(3) parseInt로 감싸준 이유는 num이 문자열로 인식을 하기 때문에 정수로 바꿔주기 위해 parseInt를 사용하였습니다.

```js
function solution(n) {
  let answer = 0;
  let num = n.toString();

  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i]);
  }
  return answer;
}
```

## 소요시간

**혼자생각한 시간** : 20분
**풀이 및 이해시간** : 30분

## 어려웠던 점

1. 문제를 쉽게 보았지만, 숫자의 자리 합을 return 하라는 점이 어려웠습니다.

## 배운 점

1. for문을 계속 반복해서 사용한다는 점
2. toString() 을 이용해서 숫자열을 문자열로 바꾼다음, 다시 parseInt로 바꿔 정수로 바꾼점

## 궁금한 점

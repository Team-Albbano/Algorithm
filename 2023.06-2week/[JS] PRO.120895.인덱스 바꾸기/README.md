<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120895/인덱스 바꾸기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120895)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

문제풀이에 앞서 저는 for문을 통해서 하나하나 비교해서 자리를 바꿔주려 했지만 그 방법은 틀린 방법임을 알았습니다.

(1) spread 문법을 통해서 문자열->배열로 변환하였습니다

(2) 구조 분해 할당을 이용하여 , 인덱스에 접근하여 num 1과 num2에 위치를 바꿔주었습니다.

(3) 나온 배열의 값들을 다시 문자열로 바꿔주기 위해서 join 을 사용하였습니다.

```javascript
function solution(my_string, num1, num2) {
  const copy = [...my_string];
  [copy[num1], copy[num2]] = [copy[num2], copy[num1]];
  return copy.join("");
}
```

## 소요시간

60분

## 어려웠던 점

## 배운 점

## 궁금한 점

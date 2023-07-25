<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO. 120837. 개미 군단

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120837)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

- (1) hp가 23 이라는 가정하에 작성을 하였습니다
- (2) 수를 나눌떄 정수가 맞게 떨어져야 함으로 parseInt 를 사용하였습니다
- (3) 장군은 공격력이 5 , 병정은 3 이니 각각 5와 3으로 나누었습니다

```js
function solution(hp) {
  const general = parseInt(hp / 5);
  const solider = parseInt((hp - general * 5) / 3);
  const aesong_i = parseInt(hp - general * 5 - solider * 3);
  return general + solider + aesong_i;
}
```

풀이 설명란

```javascript
console.log("이것도 못풀어?");
```

## 소요시간

50분

## 어려웠던 점

전체적으로 이해가 좀 오래걸렸던 문제입니다.

## 배운 점

## 궁금한 점

일개미(aesong_i)에서 general _ 5 ,solider _ 3 에서 각각 5와 3을 곱했는데 공격력 떄문에 곱한거 맞나요 ?

<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120893/대문자와 소문자

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120893)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

(1) 대소문자인지 판별하는 변수 하나 생성

(2) 문자를 꺼낼 변수 하나 생성

(3) isCapital 조건이 char < 'a' (4) 비교했을때 만약 소문자가 더 크다는게 true 이면 그 값은 대문자 이므로 소문자로 변경

```javascript
function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i]; // 문자를 꺼냄
    const isCapital = char < "a"; // 대문자인지 판별.
    //아스키코드값을 보면 소문자 대문자 비교시 소문자가 대문자보다 더 크다
    if (isCapital) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  }
  return answer;
}
```

## 소요시간

60분

## 어려웠던 점

아스키코드를 이용하여 못풀어서 많이 해맷던 점.

## 배운 점

문자를 꺼낼 변수와 , 대소문자 구분지을 변수를 지정하여 서로 비교해주는 점

## 궁금한 점

아스키코드 말고 다른코드로 풀이 가능하신분 계신가요 ?

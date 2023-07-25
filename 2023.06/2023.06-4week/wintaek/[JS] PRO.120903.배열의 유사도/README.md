<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120903/배열의 유사도

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120903)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

filter 란 ?

find 메서드는 함수의 반환 값을 true로 만드는 단 하나의 요소를 찾습니다.

조건을 충족하는 요소가 여러 개라면 arr.filter(fn)를 사용하면 됩니다.

filter는 find와 문법이 유사하지만, 조건에 맞는 요소 전체를 담은 배열을 반환한다는 점에서 차이가 있습니다.

let results = arr.filter(function(item, index, array) {
// 조건을 충족하는 요소는 results에 순차적으로 더해집니다.
// 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
});

includes 란 ?

arr.includes(item, from)는 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당하는 요소를 발견하면 true를 반환합니다.

```js
function solution(s1, s2) {
  return s1.filter((e) => s2.includes(e)).length;
}
```

## 소요시간

40분

## 어려웠던 점

같을 문자열 배열을 뱉는거여서 filter 를 생각하긴 했는데 include 를 생각못해서 조금 걸린 문제

## 배운 점

머릿속에서 배열 들이 조금 정리되는 느낌 ?

## 궁금한 점

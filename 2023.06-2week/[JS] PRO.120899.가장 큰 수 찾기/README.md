<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120899/가장 큰 수 찾기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120897)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

(1) 최댓값을 찾기 위해서 array 에서 Math.max 값을 써줍니다.

(2) arr.indexOf(item, from)는 인덱스 from부터 시작해 item(요소)을 찾습니다. 요소를 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환합니다.

```javascript
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
```

## 다른 사람의 풀이

```javascript
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
```

## 소요시간

50분

## 어려웠던 점

for문을 돌려서 사용하려 했지만 실패하여 Math 로 사용하였습니다.

## 배운 점

## 궁금한 점
